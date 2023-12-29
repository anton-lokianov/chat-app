import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, IUser } from '../models/User';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModal: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  async register({ email, password, name, statusMessage }): Promise<IUser> {
    const user = await this.userModal.findOne({ email });
    if (user) {
      throw new ConflictException('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.userModal.create({
      email,
      password: hashedPassword,
      name,
      statusMessage,
    });

    return newUser;
  }

  async login({ email, password }): Promise<{ access_token: string }> {
    const user = await this.userModal.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Detail is incorrect');
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Detail is incorrect');
    }
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

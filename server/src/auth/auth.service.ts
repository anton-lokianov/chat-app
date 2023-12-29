import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, IUser } from '../models/User';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private readonly userModal: typeof User) {}

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

  async login({ email, password }): Promise<void> {}
}

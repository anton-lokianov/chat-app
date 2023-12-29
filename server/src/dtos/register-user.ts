import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  readonly password: string;

  @IsString()
  readonly statusMessage: string;
}

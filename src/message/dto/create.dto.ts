import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateMessageDTO {
  @IsEmail()
  email: string;

  @IsString()
  'content': string;

  @IsString()
  password: string;

  @IsNumber()
  phone_number: string;
}
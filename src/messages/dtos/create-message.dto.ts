import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsOptional()
  content: String;
  @IsString()
  nama: String;
  @IsNumber()
  age: number;
}

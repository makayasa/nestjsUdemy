import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsOptional()
  content: string;
  // @IsString()
  // nama: string;
  // @IsNumber()
  // age: number;
}

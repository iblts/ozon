import { IsInt, IsString } from 'class-validator';

export class CreateSellerDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsInt()
  rating: number;
}

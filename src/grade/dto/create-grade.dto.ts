import { IsInt, IsString } from "class-validator";

export class CreateGradeDto {

  @IsString()
  grade: string;

  @IsString()
  desc: string;

  @IsInt()
  seq: number;

  @IsInt()
  hourly_rate: number;
}
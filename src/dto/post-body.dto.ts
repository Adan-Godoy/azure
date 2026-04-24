import { IsString, IsNumber, NotEquals, IsNotEmpty } from 'class-validator';

export class PostBodyDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNumber()
  edad: number;

  @IsNumber()
  @NotEquals(0, { message: 'El número N no puede ser cero para evitar división por cero.' })
  n: number;
}
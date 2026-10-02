import { Type } from 'class-transformer';
import { IsEmail, IsInt, IsString, Min } from 'class-validator';

export class CreateClienteDto {

  // Aquí recibimos el nombre del cliente
  @IsString()
  nombre!: string;

  // Validamos que el correo tenga un formato correcto
  @IsEmail()
  correo!: string;

  // La edad debe ser un número entero y mayor a cero
  @IsInt()
  @Min(1)
  @Type(() => Number)
  edad!: number;

  // El teléfono lo manejamos como texto porque puede contener caracteres
  @IsString()
  telefono!: string;

  // Ciudad donde vive el cliente
  @IsString()
  ciudad!: string;
}
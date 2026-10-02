import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto.js';

// PartialType hace que las propiedades del DTO de creación sean opcionales
// para poder modificar solamente los datos que necesitemos
export class UpdateClienteDto extends PartialType(CreateClienteDto) {}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe
} from '@nestjs/common';

import { ClientesService } from './clientes.service.js';
import { CreateClienteDto } from './dto/create-cliente.dto.js';
import { UpdateClienteDto } from './dto/update-cliente.dto.js';

@Controller('clientes')
export class ClientesController {

  constructor(
    private readonly clientesService: ClientesService
  ) {}

  // Crear un nuevo cliente
  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {

    return this.clientesService.create(createClienteDto);
  }

  // Obtener todos los clientes
  @Get()
  findAll() {

    return this.clientesService.findAll();
  }

  // Obtener un cliente por su UUID
  @Get(':id')
  findOne(
    @Param('id', ParseUUIDPipe) id: string
  ) {

    return this.clientesService.findOne(id);
  }

  // Actualizar los datos de un cliente
  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateClienteDto: UpdateClienteDto
  ) {

    return this.clientesService.update(
      id,
      updateClienteDto
    );
  }

  // Eliminar un cliente por su UUID
  @Delete(':id')
  remove(
    @Param('id', ParseUUIDPipe) id: string
  ) {

    return this.clientesService.remove(id);
  }
}
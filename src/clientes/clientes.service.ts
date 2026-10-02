import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as Uuidv4 } from 'uuid';

import { CreateClienteDto } from './dto/create-cliente.dto.js';
import { UpdateClienteDto } from './dto/update-cliente.dto.js';
import { Cliente } from './entities/cliente.entity.js';

@Injectable()
export class ClientesService {

  // Aquí guardamos temporalmente nuestros clientes
  private clientes: Cliente[] = [];

  create(createClienteDto: CreateClienteDto) {

    const {
      nombre,
      correo,
      edad,
      telefono,
      ciudad
    } = createClienteDto;

    // Generamos automáticamente un UUID para cada cliente
    const nuevoCliente = new Cliente(
      Uuidv4(),
      nombre,
      correo,
      edad,
      telefono,
      ciudad
    );

    // Agregamos el cliente al arreglo
    this.clientes.push(nuevoCliente);

    return nuevoCliente;
  }

  // Regresa todos los clientes registrados
  findAll() {
    return this.clientes;
  }

  // Busca un cliente utilizando su UUID
  findOne(id: string): Cliente {

    const cliente = this.clientes.find(
      (cliente) => cliente.id === id
    );

    // Si no encontramos el cliente mostramos un error
    if (!cliente) {
      throw new NotFoundException(
        `Cliente con id ${id} no encontrado`
      );
    }

    return cliente;
  }

  // Actualiza los datos de un cliente
  update(id: string, updateClienteDto: UpdateClienteDto) {

    const {
      nombre,
      correo,
      edad,
      telefono,
      ciudad
    } = updateClienteDto;

    // Primero buscamos que el cliente exista
    const cliente = this.findOne(id);

    // Actualizamos solamente los datos recibidos
    cliente.updateWith({
      nombre,
      correo,
      edad,
      telefono,
      ciudad
    });

    return cliente;
  }

  // Elimina un cliente utilizando su UUID
  remove(id: string) {

    // Primero verificamos que exista
    const cliente = this.findOne(id);

    // Quitamos el cliente del arreglo
    this.clientes = this.clientes.filter(
      (cliente) => cliente.id !== id
    );

    return {
      status: 200,
      msg: 'Cliente eliminado con éxito',
      cliente: cliente
    };
  }
}
// La Entity representa la estructura de los datos
// que vamos a manejar dentro de nuestro recurso

interface UpdateWithOptions {
  nombre?: string;
  correo?: string;
  edad?: number;
  telefono?: string;
  ciudad?: string;
}

export class Cliente {

  constructor(
    // El ID se genera automáticamente utilizando un UUID
    public id: string,

    // Datos que tendrá nuestro cliente
    public nombre: string,
    public correo: string,
    public edad: number,
    public telefono: string,
    public ciudad: string,
  ) {}

  // Esta función nos permite actualizar solamente
  // los datos que recibamos
  updateWith({
    nombre,
    correo,
    edad,
    telefono,
    ciudad,
  }: UpdateWithOptions) {

    this.nombre = nombre ?? this.nombre;
    this.correo = correo ?? this.correo;
    this.edad = edad ?? this.edad;
    this.telefono = telefono ?? this.telefono;
    this.ciudad = ciudad ?? this.ciudad;
  }
}
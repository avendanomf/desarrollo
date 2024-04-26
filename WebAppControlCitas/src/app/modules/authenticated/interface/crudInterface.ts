export interface Customer {
  clienteId: number
  fechaRegistro: string
  nombre: string
  nit: string
  direccion: string
  correo: string
  telefono: string
  activo: boolean
  obra: any[]
}

export interface Project {
  proyectoId: number
  fechaRegistro: string
  nombre: string
  pin: null
  direccion: string
  ubicacion: string
  observaciones: string
  activo: boolean
}

export interface ResponseCrud {
  mensaje: string
  response: Response
}

export interface Response {
  datos: any[]
  totalRecords: number
  totalPages: number
}

export interface User {
  usuarioId: number
  fechaRegistro: string
  tipoIdentificacion: number
  identificacion: number
  nombres: string
  telefono: string
  correo: string
  password: string
  activo: boolean
  obras: any[]
  perfiles: Perfile[]
}

export interface Perfile {
  perfilId: number
  usuarioId: number
  rolId: number
  rol: Rol
  usuario: null
}

export interface Rol {
  rolId: number
  nombre: string
  activo: null
  perfiles: any[]
  permisos: any[]
}

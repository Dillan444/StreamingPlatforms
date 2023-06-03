import { patrocinio } from "./type.js"
export class Empresa {
  nombre: string

  private patrocinios: patrocinio[] = []

  constructor(nombre: string) {
    this.nombre = nombre
  }

  add_patrocinio(nombre: string, logo: string, descripcion: string) {
    this.patrocinios.push({nombre, logo, descripcion})
  }
}
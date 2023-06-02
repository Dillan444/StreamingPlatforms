import { redes } from "./type.js"

export class Streamer {
  nickname: string
  descripcion: string
  redesSociales: redes

  constructor(nickname: string, descripcion: string, redesSociales: redes) {
    this.nickname = nickname
    this.descripcion = descripcion
    this.redesSociales = redesSociales
  }
}
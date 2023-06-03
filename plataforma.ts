import { Canal } from "./canal.js"
import { Empresa } from "./empresa.js"
import { Streamer } from "./streamer.js"

export class Plataforma {
  nombre: string
  logo: string
  descripcion: string

  canales: Canal[] = []
  streamers: Streamer[] = []
  patrocinador: Empresa | null = null

  constructor(nombre: string, logo: string, descripcion: string) {
    this.nombre = nombre
    this.logo = logo
    this.descripcion = descripcion
  }

  create_canal(nombre: string, baner: string, nombreStreamer: string, descripcion: string, streamer: Streamer) {
    const newCanal = new Canal(nombre, baner, nombreStreamer, descripcion, streamer)
    this.add_canal(newCanal)

    return newCanal
  }

  show_mensajes(mensaje: object){
    console.log(mensaje)
  }

  create_streamer(nickname: string, descripcion: string, redesSociales: object = {}) {
    const newStreamer = new Streamer(nickname, descripcion, redesSociales, this)
    this.add_streamer(newStreamer)

    return newStreamer
  }

  private add_canal(canal: Canal) {
    this.canales.push(canal)
  }

  private add_streamer(streamer: Streamer) {
    this.streamers.push(streamer)
  }

  private add_patrocinador(patrocinador: Empresa) {
    this.patrocinador = patrocinador
  }
}
import { Canal } from "./canal.js"
import { Categoria } from "./categoria.js"
import { Plataforma } from "./plataforma.js"
import { Stream } from "./stream.js"
import { redes } from "./type.js"

export class Streamer {
  nickname: string
  descripcion: string
  redesSociales: redes

  canales: Canal[] = []
  streams: Stream[] = []
  plataforma: Plataforma


  constructor(nickname: string, descripcion: string, redesSociales: redes, plataforma: Plataforma) {
    this.nickname = nickname
    this.descripcion = descripcion
    this.redesSociales = redesSociales
    this.plataforma = plataforma
  }

  get_detalle() {
    return this
  }

  get_streams() {
    return this.streams
  }

  get_canales() {
    return this.canales
  }

  get_listaCanales(){
    const misCanales: any[] = []
    this.canales.forEach(canal => {
      misCanales.push({
        "nombre": canal.nombre,
        "descripcion": canal.descripcion
      })
    })

    return misCanales
  }


  add_canal(nombre: string, baner: string, descripcion: string) {
    const newCanal = this.plataforma.create_canal(nombre, baner, this.nickname, descripcion, this)
    this.canales.push(newCanal)
  }

  add_stream(nombreCategoria: string, descripcion: string, imagen: string, nombreCanal: string) {
    const canal = this.filter_canal(nombreCanal)

    if (!canal) {
      const mensaje = {
        "TypeError": 404,
        "Error": `El canal ${nombreCanal} no fue encontrado`,
        "Descripción": `No se pudo asignar el stream porque no se encontro referencia del canal '${nombreCanal}' en base de datos`
      }
      this.plataforma.show_mensajes(mensaje)
      return
    }

    const newStream = canal.create_stream(
      new Categoria(nombreCategoria, descripcion, imagen),
      this
    )

    this.streams.push(newStream)
  }

  filter_canal(nombre: string): Canal {
    const miCanal = this.canales.filter(canal => canal.nombre === nombre)[0]
    return miCanal
  }
}
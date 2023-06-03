import { Categoria } from "./categoria.js"
import { Stream } from "./stream.js"
import { Streamer } from "./streamer.js"

export class Canal {
  nombre: string
  baner: string
  nombreStreamer: string
  descripcion: string

  streamers: Streamer
  streams: Stream[] = []

  constructor(nombre: string, baner: string, nombreStreamer: string, descripcion: string, streamer: Streamer) {
    this.nombre = nombre
    this.baner = baner
    this.nombreStreamer = nombreStreamer
    this.descripcion = descripcion
    this.streamers = streamer
  }

  create_stream(categoria: Categoria, streamer: Streamer) {
    const newStream = new Stream(categoria, streamer, this)
    this.streams.push(newStream)

    return newStream
  }
}
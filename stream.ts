import { Canal } from "./canal.js";
import { Categoria } from "./categoria.js";
import { Streamer } from "./streamer.js";


export class Stream {
  categorias: Categoria[] = []
  streamer: Streamer
  canal: Canal


  constructor(categoria: Categoria, streamer: Streamer, canal: Canal) {
    this.categorias.push(categoria)
    this.canal = canal
    this.streamer = streamer
  }

  get_detalle() {
    return this
  }

  get_categorias() {
    return this.categorias
  }

  get_streamer() {
    return this.streamer
  }

  get_canal() {
    return this.canal
  }

  add_categoria(nombre: string, descripcion: string, imagen: string) {
    const newCategoria = new Categoria(nombre, descripcion, imagen)

    this.categorias.push(newCategoria)
  }
}
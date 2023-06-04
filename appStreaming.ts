import { Canal } from "./canal"
import { Plataforma } from "./plataforma.js"
import { Stream } from "./stream.js"
export class AppStreaming {
  nombre: string

  plataformas: Plataforma[] = []

  constructor(nombre: string) {
    this.nombre = nombre
    
  }

  add_plataforma(plataforma: Plataforma) {
    this.plataformas.push(plataforma)
  }

  show_listadoPlataformas() {
    const plataformas = this.plataformas.map(plataforma => plataforma.nombre)
    console.group("Listado de plataformas")
    console.log(plataformas)
    console.groupEnd()
  }

  show_detallesPlataforma(nombrePlataforma: string) {
    const plataforma = this.filter_objeto("Twich", "nombre", this.plataformas)
    console.group(`Detalles de ${nombrePlataforma}`)
    console.log(plataforma)
    console.groupEnd()
  }

  show_listadoCanales() {
    const canales: any[] = []
    this.plataformas.forEach(plataforma => {
      canales.push(...plataforma.canales.map(canal => {
        return {
          "nombre": canal.nombre,
          "streamer": canal.nombreStreamer,
          "descripcion": canal.descripcion
        }
      }))
    })
    console.group("Canales")
    console.log(canales)
    console.groupEnd()
  }

  show_detallesCanal(nombreCanal: string) {
    const canales: any[] = []
    this.plataformas.forEach(plataforma => {
      canales.push(...plataforma.canales.map(canal => canal))
    })
    const canal = this.filter_objeto(nombreCanal, "nombre", canales)

    console.group(`Detalles del canal ${nombreCanal}`)
    console.log(canal)
    console.groupEnd()
  }

  show_listadoStreamers() {
    const streamers: any[] =[]
    this.plataformas.forEach(plataforma => {
      const listStreamers = plataforma.streamers.map(streamer => {
        return {
          "nickname": streamer.nickname,
          "redes sociales": streamer.redesSociales
        }
      })

      streamers.push(...listStreamers)
    });

    console.group("Listado de Streamers")
    console.log(streamers)
    console.groupEnd()
  }

  show_detalleStreamer(nombreStreamer: string) {
    const streamers: any[] =[]
    this.plataformas.forEach(plataforma => {
      const listStreamers = plataforma.streamers.map(streamer => streamer)

      streamers.push(...listStreamers)
    });

    const streamer = this.filter_objeto(nombreStreamer, "nickname", streamers)

    console.group(`Detalle del streamer ${nombreStreamer}`)
    console.log(streamer)
    console.groupEnd()
  }

  show_listadoStreams(){
    const canales: Canal[] = []
    const streams: any[] = []

    this.plataformas.forEach(plataforma => {
      canales.push(...plataforma.canales.map(canal => canal))
    }) 
    canales.forEach(canal => {
      streams.push(...canal.streams.map(stream => stream.get_datosBasicos()))
    })

    console.group("Listado de los streams")
    console.log(streams)
    console.groupEnd()
  }

  show_destallesStream(id: number) {
    const canales: Canal[] = []
    const streams: Stream[] = []

    this.plataformas.forEach(plataforma => {
      canales.push(...plataforma.canales.map(canal => canal))
    }) 
    canales.forEach(canal => {
      streams.push(...canal.streams.map(stream => stream))
    })

    console.group("Detalle de un Stream")
    console.log(streams[id])
    console.groupEnd()
  }

  filter_objeto(dato: string, tipoDato: string = "nombre", array: any): Plataforma{
    return array.filter((clase: any) => clase[tipoDato] === dato)[0]
  }
}
import { streamingApp } from "./dataBase.js"

streamingApp.show_listadoPlataformas()
streamingApp.show_detallesPlataforma("Twich")
streamingApp.show_listadoCanales()
streamingApp.show_detallesCanal("Un comienzo")
streamingApp.show_listadoStreamers()
streamingApp.show_detalleStreamer("Dillan444")
streamingApp.show_listadoStreams()
streamingApp.show_destallesStream(2)

document.getElementById('title')!.innerHTML = streamingApp.nombre 

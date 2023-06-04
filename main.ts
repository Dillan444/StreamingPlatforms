import { AppStreaming } from "./appStreaming.js";
import { Plataforma } from "./plataforma.js";

const streamingApp = new AppStreaming("Our Streamings")

// Plataformas
const plataforma1 = new Plataforma("Twich", "twich.png", "Plataforma de streaming")
const plataforma2 = new Plataforma("Youtuve", "youtube.png", "Plataforma de streaming")
streamingApp.add_plataforma(plataforma1)
streamingApp.add_plataforma(plataforma2)

const streamer1 = plataforma1.create_streamer("Dillan444", "Creador de contenido de programación", {"facebook": "https//facebook.com"})
streamer1.add_canal("Un comienzo", "No sé que es esto", "Estos son mis comienzos en el mundo de la programación")
streamer1.add_canal("Errores avanzados", "No sé que es esto", "Profundiza en el manejo de errores en TypeScript")

streamer1.add_stream("Educación", "Aprendamos sobre las bases de la programación orientada a objetos", "stream1.jpg", "Un comienzo")
streamer1.add_stream("Errores", "Aprendamos sobre el manejo de errores parte 1", "stream1.jpg", "Errores avanzados")


const streamer2 = plataforma2.create_streamer("Josue", "Creador de contenido de programación")
streamer2.add_canal("Curiosidades", "Sin baner", "Canal de curiosidades")
streamer2.add_stream("Los Gatos", "Los gatos son animales muy curiosos", "curiosidad.jpg", "Curiosidades")

streamingApp.show_listadoPlataformas()
streamingApp.show_detallesPlataforma("Twich")
streamingApp.show_listadoCanales()
streamingApp.show_detallesCanal("Un comienzo")
streamingApp.show_listadoStreamers()
streamingApp.show_detalleStreamer("Dillan444")
streamingApp.show_listadoStreams()
streamingApp.show_destallesStream(2)


console.log("hola mundo,mi primer bakend")

import express from "express"
import indexRouter from "./routes/aprendices.routes.js"
import cors from 'cors';

const app = express()
//permite procesar los datos del cliente

app.use(express.json())
//permite que nos podamos comunicar entre aplicaciones web
app.use(cors('*'))

app.use(indexRouter)

app.listen(3000);
console.log(`Aplicacion corriendo en el puerto ${3000}`)


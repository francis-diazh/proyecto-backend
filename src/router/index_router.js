import { Router } from "express";
import api_router from "./api/index.js"
import views_router from "./views/index.js"
import mensajes_router from "./views/mensajes.js";

 
const index_router = Router()

index_router.use("/api",api_router) //enrutador de rutas que respondan con el JSON
index_router.use("/", views_router) //enrutador de rutas que respondan con handlebars (es decir con las views)

index_router.use("/coder",mensajes_router)

export default index_router 
import { Router } from "express";
import api_router from "./api/index.js"
import view_router from "./views/index.js"
 
const index_router = Router()

index_router.use("/api",api_router) //enrutador de rutas que respondan con el JSON
index_router.use("/", view_router) //enrutador de rutas que respondan con handlebars (es decir con las views)

export default index_router 
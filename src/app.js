import express from "express"
import router from "./router/index_router.js"
import errorHandler from "./middlewares/errorHandler.js"
import not_found_handler from "./middlewares/notFoundHandler.js"
import { engine } from "express-handlebars"
import { __dirname } from "./utils.js"

let server = express()

server.engine("handlebars",engine())
server.set("view engine","handlebars")
server.set("views",__dirname+"/views")

//middlewares
server.use("/public",express.static("public"))
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use("/",router)
server.use(errorHandler)
server.use(not_found_handler)

export default server

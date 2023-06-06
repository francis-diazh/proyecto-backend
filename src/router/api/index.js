import {Router} from "express"
// import products_router from "./product.js"
import products_router from "./product.mongo.js"
import cart_router from "./carts.js"
import auth_router from "./auth.js"
import students_router from './students.mongo.js'

const api_router = Router()

api_router.use ("/products",products_router)
api_router.use("/carts", cart_router)
api_router.use ("/auth",auth_router)
api_router.use('/students', students_router)

export default api_router
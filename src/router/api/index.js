import {Router} from "express"
import products_router from "./product.js"
import cart_router from "./carts.js"
import auth_router from "./auth.js"

const api_router = Router()

api_router.use ("/products",products_router)
api_router.use("/carts", cart_router)
api_router.use ("/auth",auth_router)

export default api_router
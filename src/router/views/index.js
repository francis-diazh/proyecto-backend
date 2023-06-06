import { Router, application } from "express"
import auth_router from "./auth.js"
import router_product from "./products.js"
import router_home from "./home.js"
import router_carts from "./carts.js"
import router_product_id from "./product.js"


const router = Router()


router.use('/products',router_product)
router.use('/',router_home)
router.use('/',router_carts)
router.use('/product',router_product_id)

router.get(
    "/",
    async (req,res,next) => {
        try {
            return res.render(
                "index",
                {
                    name: "Francis",
                    // last_name: "Diaz",
                    title: "Mi pagina",
                    script:"./public/connection.js",
                    producto: [
                        {name:"Remera", photo:"https://kritikalstore.com/wp-content/uploads/2021/11/remeras-oversize-1.jpg"},{name:"Pantalon", photo:"https://m.media-amazon.com/images/I/51BLz7Tc4PL.jpg"},
                        {name: "Hoodie", photo:"https://d3ugyf2ht6aenh.cloudfront.net/stores/903/556/products/hoodie-verde-31-0937b96943e40e69b916799421586669-240-0.webp"},

                    ]
                }
            )
        } catch (error) {
            next(error)
        }
    }
)
router.get(
    '/new_product',
    async(req,res,next) => {
        try {
            return res.render(
                'new_product',
                {   title: 'new_product',
                    script: '/public/connection.js',
                    title: 'Product' }
            )
        } catch (error) {
            next()
        }
    }
)
router.get(
    '/chat',
    async(req,res,next) => {
        try {
            return res.render(
                'chat',
                {   title: 'chat',
                    script: '/public/chat.js',
                    title: 'chat' }
            )
        } catch (error) {
            next()
        }
    }
)

router.use('/auth',auth_router)

// router.use("/products",product_router)
// router.use("/carts", cart_router)
export default router
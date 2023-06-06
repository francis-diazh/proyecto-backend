import { Router } from "express";

const router_carts = Router()

router_carts.get(
    '/carts',
    async(req,res,next) => {
        try {
            return res.render(
                'carts', 
                {
                    name: 'Francis',
                    last_name: 'Diaz',
                    photo: 'https://www.w3schools.com/howto/img_avatar.png',
                    script: "public/cart.js",
                    conection: '/public/connection.js'
            })
        } catch (error) {
            next()
        }
    }
)



export default router_carts
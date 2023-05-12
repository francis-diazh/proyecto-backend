import { Router } from "express";

const router = Router()

router.get(
    "/vista_de_prueba",
    async (req,res,next) => {
        try {
            return res.render(
                "index",
                {
                    name: "Francis",
                    // last_name: "Diaz",
                    title: "Mi pagina",
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

export default router
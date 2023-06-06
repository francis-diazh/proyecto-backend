import { Router } from "express"
import fetch from "node-fetch";
const router_product_id = Router()

router_product_id.get(
    '/:pid',
    async (req,res,next) => {
        try {
            let id = Number(req.params.pid)
            const response = await fetch(`http://localhost:8080/api/products/${id}`)
            const data = await response.json()
            return res.render(
                'product',    //nombre de la vista
                {           //datos dinamicos que puede llegar a necesitar la vista
                    namepage: '',
                    products: data.product,
                    title: 'product',
                }        
            )
        } catch (error) {
            next(error)
        }
    }
)



export default router_product_id
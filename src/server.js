import express from "express"
import router from "./router/index_router.js"
import errorHandler from "./middlewares/errorHandler.js"
import not_found_handler from "./middlewares/notFoundHandler.js"

let server = express()

let PORT = 8080
let ready= ()=>console.log("server ready on port: "+PORT)

server.listen(PORT,ready)
server.use(express.static("public"))
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use("/",router)
server.use(errorHandler)
server.use(not_found_handler)

// let index_route ="/"
// let index_function =(req,res)=>{
//     let products= manager.getProducts().length
//     console.log(products)
//     return res.send(`Hola, hay ${products} usuarios`)
// }
// server.get(index_route,index_function)

// let products_route =  "/api/products"
// let products_function=(req,res)=>{
//     let limit=req.query.limit
//     console.log(limit)
//     if(limit){
//         let products = manager.getProducts().slice(0,limit)
//     if(products.length>0){
//         return res.send({
//             success: true,
//             products: products
//         })
//     }else{
//     return res.send({
//         success: false,
//         products: "not found"
//     })}
//     }else{
//         let products = manager.getProducts()
//         if(products.length>0){
//             return res.send({
//                 success: true,
//                 products: products
//             })
//         }else{
//         return res.send({
//             success: false,
//             products: "not found"
//         })}  
//     }
    
// }
// server.get(products_route,products_function)

// let id_route= "/api/products/:id"
// let id_function=(req,res)=>{
//     let parametros = req.params
//     let id = Number(parametros.id)
//     let one=manager.getProductById(id)
//     console.log(one)
//     if(one){
//         return res.send({
//             success: true,
//             response : {one}
//         })
//     }else{
//         return res.send({
//             success: false,
//             response : "not found"
//         })
//     }
// }
// server.get(id_route,id_function)

// let cart_route="/api/carts"
// let cart_function=(req,res)=>{
//     let carrito= cart.getCarts()
//     console.log(carrito)
//     return res.send({
//         success:true,
//         response:carrito

//     })

// }
// server.get(cart_route,cart_function)

// let cid_route= "/api/carts/:cid"
// let cid_function=(req,res)=>{
//     let parametros = req.params
//     let id = Number(parametros.cid)
//     let one=cart.getCartsById(id)
//     console.log(one)
//     if(one){
//         return res.send({
//             success: true,
//             response : {one}
//         })
//     }else{
//         return res.send({
//             success: false,
//             user : "not found"
//         })
//     }
// }
// server.get(cid_route,cid_function)

// server.post(
//     "/api/products",
//     async (req,res)=>{
//         try {
//             let title = req.body.title ?? null
//             let description = req.body.description ?? null
//             let price = req.body.price ?? null
//             let thumbnail = req.body.thumbnail ?? null
//             let stock = req.body.stock ?? []
//             if (title&&description&&price&&thumbnail&&stock){
//                 let product = await manager.addProduct({title,description,price,thumbnail,stock})
//                 return res.json({
//                     status: 201,
//                     product_id : product.id,
//                     message: "created!"
//             })
//             }else{
//                 return res.json({
//                     status:400,
//                     message: "check data!"
//             })
            
//         }
//         } catch (error) {
//             console.log(error)
//             return res.json({
//                 status: 500,
//                 message: "error"
//             })
            
//         }
        
       
//     }
// )

// server.put (
//     "/api/products/:udi",
//     (req,res)=>{
//         if (req.body && req.params.uid){
//            let id = Number(req.params.uid)
//             let data = req.body
//             manager.updateProduct (id,data)   
//             return res.json({
//                 status:200,
//                 message: "product updated!"
//             })
//         } else {
//             return res.json({
//                 status: 400,
//                 message: "check data!"
//             })

//         }
//     }
// )

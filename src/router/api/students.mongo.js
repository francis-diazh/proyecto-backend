import { Router } from "express";
import Student from "../../models/student.model.js";
import Product from "../../models/product.model.js";

const router = Router()

router.post('/',async(req,res,next)=>{
    try {
        let one = await Student.create(req.body)
        if (one) {
            return res.json({
                status: 201,
                message: 'student created',
                id: one._id
            })
        }
    } catch (error) {
        next(error)
    }
})   //para crear
router.get('/',async(req,res,next)=>{
    try {
        let all = await Student.find().select('name age -_id') // -_id para quitar el id
        if(all){
            return res.json({
                status:200, // exito siempre 200, menos en el post qe es 201
                response: all
            })
        }
    } catch (error) {
        next(error)
    }
})    //para leer
router.put('/:sid', async(req,res,next)=>{
    try {
        let one = await Student.findByIdAndUpdate(req.params.sid,req.body)
        if(one){
            return res.json({
                status:200,
                message: "updated!"
            })
        }
    } catch (error) {
        next(error)
    }
})    //para actualizar

router.delete('/:sid',async(req,res,next)=>{
    try {
        let one= await Student.findByIdAndDelete(req.params.sid)
        if(one){
            return res.json({
                status:200,
                message:"deleted"
            })
        }
    } catch (error) {
        next(error)
    }
}) //para eliminar

export default router
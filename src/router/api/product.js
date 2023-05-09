import {Router} from "express"

const router = Router()

router.get("/",(req,res,next)=>{
    try {
        return res.json({status:"ok"})
    } catch (error) {
        next(error)
    }
})
    
// router.post()
// router.put()
// router.delete()

export default router 
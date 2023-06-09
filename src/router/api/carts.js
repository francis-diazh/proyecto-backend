import {Router} from "express"
import cart from "../../managers/carts.js"
import manager from "../../managers/script.js"

const router= Router()

router.post('/', async(req,res,next)=> {
  try {
      let response = await cart.add_cart(req.body)
      if (response===201) {
          return res.json({ status:201,message:'cart created'})
      }
      return res.json({ status:400,message:'not created'})
  } catch(error) {
      next(error)
  }
})
router.get('/', async(req,res,next)=> {
  try {
      let all = cart.getCarts()
      if (all.length>0) {
          return res.json({ status:200,all })
      }
      let message = 'not found'
      return res.json({ status:404,message })
  } catch(error) {
      next(error)
  }
})
router.get('/:cid', async(req,res,next)=> {
  try {
      let id = Number(req.params.cid)
      let one = cart.getCartsById(id)
      if (one) {
          return res.json({ status:200,one })
      }
      let message = 'not found'
      return res.json({ status:404,message })
  } catch(error) {
      next(error)
  }
})
router.put('/:cid', async(req,res,next)=> {
  try {
      let id = Number(req.params.cid)
      let data = req.body
      let response = await cart.update_cart(id,data)
      if (response===200) {
          return res.json({ status:200,message:'cart updated'})
      }
      return res.json({ status:404,message:'not found'})
  } catch(error) {
      next(error)
  }
})

router.put("/:cid/product/:pid/:units", async (req, res, next) => {
  try {
      let id = Number(req.params.pid);
      let cid = Number(req.params.cid);
      let units = Number(req.params.units);
  
      let response = await cart.update_cart(cid, id, units);
      if (response === 200) {
          return res.json({ status: 200, message: "cart updated" });
      }
      return res.json({ status: 404, message: "not found" });
      } catch (error) {
      next(error);
      }
  });

router.delete('/:cid', async(req,res,next)=> {
  try {
      let id = Number(req.params.cid)
      let response = await cart.destroy_cart(id)
      if (response===200) {
          return res.json({ status:200,message:'cart deleted'})
      }
      return res.json({ status:404,message:'not found'})
  } catch(error) {
      next(error)
  }
})


router.delete("/:cid/product/:pid/:units", async (req, res, next) => {
  try {
  let id = Number(req.params.pid);
  let cid = Number(req.params.cid);
  let units = Number(req.params.units);

  let response = await cart.delete_cart(cid, id, units);
  if (response === 200) {
      return res.json({ status: 200, message: "cart delete" });
  }
  return res.json({ status: 404, message: "not found" });
  } catch (error) {
  next(error);
  }
});

export default router
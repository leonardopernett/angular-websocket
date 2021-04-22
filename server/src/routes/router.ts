import {Router, Response, Request} from 'express'
const router = Router()

router.get('/message',(req:Request, res:Response) => {
  res.json({ok:true, message:'get is ok' })
})

router.post('/message',(req:Request, res:Response) => {
   console.log(req.body)
  res.status(200).json({ok:true,message:'post is ok'})
})

router.get('/message/:id',(req:Request, res:Response) => {
  console.log(req.params)
 res.status(200).json({ok:true,message:'post is ok'})
})

export default router
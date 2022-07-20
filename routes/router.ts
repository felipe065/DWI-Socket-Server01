import { Router, Request, Response } from "express";
import Server from "../classes/server";
export const router = Router();


router.get('/mensajes', (req: Request, res: Response) =>
{
    res.json(
 {
    ok:true,
    mensaje: 'Todo esta bien'
 });
});

router.post('/mensajes',(req: Request, res: Response)=>{
   const cuerpo = req.body.cuerpo;
   const de = req.body.de;

   const payload = {cuerpo, de};

   const server = Server._instance;
   server.io.emit("mensaje-nuevo", payload);
})


router.post('/mensajes/:para', (req:Request, res:Response) =>
{
   const cuerpo = req.body.cuerpo;
   const de = req.body.de;
   const para = req.params.para;

const payload ={
   de,
   cuerpo
}   

   const server = Server.instance;
   server.io.in(para).emit('mensaje-privado',payload);

   res.json({
      ok:true,
      cuerpo,
      de,
      para,
  
   });

});




export default router;
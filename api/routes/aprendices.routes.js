//HTTP es un proyecto que nos permite la cominicacion entrevarias computadoras 
//en la api usaremos los metodos get, post, put,delete de HTTP
//HTTP nos volvera un codigo de respuesta (200 si todo sale bien y 400 si falla)
//las api siempre devuelven al cliente un codigo de estado y un json si todo sale bien con los datos
//request = solicitud,response = respuesta
import { Router} from "express";
import {getAprendices,getAprendiz,createAprendiz,deleteAprendiz, editAprendiz} from "../controllers/aprendices.controllers.js";
const router = Router();
router.get("/aprendiz",getAprendices);
router.get("/aprendiz/:id",getAprendiz)
router.post("/aprendiz",createAprendiz);
router.put("/aprendiz/:id",editAprendiz);
router.delete("/aprendiz/:id",deleteAprendiz);
export default router;
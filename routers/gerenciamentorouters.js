import {Router} from "express";
import { listarDados } from '../consultas/controllerusuarios.js';
const router = Router(); 

//get post put delete

router.get("/usuarios",async (req,res)=>{
    const usuarios = await listarDados();
    res.json(usuarios);
});

router.post("/usuarios",(req, res)=>{
    res.send("chegou, estamos cadastrando os seus dados!")
});

router.put("/usuario/:id", (req, res)=>{
    const { id } =req.params;
    res.send(`chegou, estamos atualizando os seus dados ${id}!`);
});

router.delete("/usuario", (req, res)=>{
    const { id } =req.params;
    res.send("chegou, estamos alterando ou deletando os dados selecionados" + id +"!");
});

export default router;
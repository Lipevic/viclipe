import { openDb } from '../database/configDB.js';
import {Router} from "express";
const router = Router(); 

//get post put delete

router.get("/atendimentos",async(req,res)=>{
    const db = await openDb();
    const usuarios = await db.all('SELECT id,nome FROM usuarios');
    res.json(usuarios); // ← Retorna os usuários em formato JSON



});

router.post("/atendimentos",(req, res)=>{
    res.send("chegou, estamos cadastrando os seus dados!")
});

router.put("/atendimento/:id", (req, res)=>{
    const { id } =req.params;
    res.send(`chegou, estamos atualizando os seus dados ${id}!`);
});

router.delete("/atendimento", (req, res)=>{
    const { id } =req.params;
    res.send("chegou, estamos alterando ou deletando os dados selecionados" + id +"!");
});

export default router;
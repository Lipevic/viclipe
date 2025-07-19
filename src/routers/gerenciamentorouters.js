import {Router} from "express";
import { createTablePessoa, deleteDataPessoa, insertDataPessoa, listarPessoas, updateDataPessoa } from "../controllers/pessoa.js";
const router = Router(); 

//get post put delete

router.get("/usuarios",async (req,res)=>{
    createTablePessoa();
    const pessoas = await listarPessoas();
    res.json(pessoas);
});

router.post("/usuarios",(req, res)=>{
   insertDataPessoa(req.body);
   res.json('ok');

});

router.put("/usuarios", (req, res)=>{
    updateDataPessoa(req.body);
    res.json('Usuário atualizado');   
});

router.delete("/usuarios/:id", async(req, res)=>{
    const {id} = req.params;
    await deleteDataPessoa(id);
    res.json('Usuário deletado'); 
});

export default router;
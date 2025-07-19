import { openDb } from "../database/configDB.js";


export async function listarDados() {
    const db = await openDb();
    const pessoas = await db.all('SELECT id,nome FROM pessoa');
    return pessoas;
}


export async function criarUsuarios(params) {
    
}


export async function atulizarDados(params) {
    
}

export async function deletarUsuarios(params) {
    
}
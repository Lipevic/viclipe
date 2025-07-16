import { openDb } from "../database/configDB.js";


export async function listarDados() {
    const db = await openDb();
    const usuarios = await db.all('SELECT id,nome FROM usuarios');
    return usuarios;
}


export async function criarUsuarios(params) {
    
}


export async function atulizarDados(params) {
    
}

export async function deletarUsuarios(params) {
    
}
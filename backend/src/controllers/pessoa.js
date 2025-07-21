
import { openDb } from "../database/configDB.js"

export async function createTablePessoa() {
    openDb().then(db=>{
        db.exec(`
            CREATE TABLE IF NOT EXISTS pessoa(
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            nome TEXT NOT NULL, 
            email TEXT NOT NULL UNIQUE,
            senha TEXT NOT NULL,
            data_criacao TEXT NOT NULL 
        )
        `)
    });
};


export async function insertDataPessoa(pessoa) {
    openDb().then(db=>{
        db.run(`
            INSERT INTO pessoa(nome, email, senha, data_criacao) VALUES(?,?,?,?)
        `,[pessoa.nome, pessoa.email, pessoa.senha, pessoa.data_criacao]);
    });
};

export async function updateDataPessoa(pessoa) {
    openDb().then(db=>{
        db.run(`
            UPDATE pessoa SET nome=?, email=?, senha=?, data_criacao=? where id=?
        `,[pessoa.nome, pessoa.email, pessoa.senha, pessoa.data_criacao, pessoa.id]);
    });
};


export async function deleteDataPessoa(id) {
    const db = await openDb();

    await db.run(`
       DELETE FROM pessoa WHERE id=?
        `,[id]);
};


export async function listarPessoas() {
    const db = await openDb();
    const pessoas = await db.all('SELECT * FROM pessoa');
    return pessoas;
}
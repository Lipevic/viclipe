import express from 'express';
const app = express();
const port = 3000;
import router from './routers/index.js';
import { createTablePessoa } from './controllers/pessoa.js';

app.use(express.json());
createTablePessoa
router(app);

app.listen(port,(error) =>{
    if(error){
        console.log("Deu erro");
        return;
    }
    console.log("Subiu, meu chapa! :)");
});
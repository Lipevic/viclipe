//import { openDb } from './database/configDB.js';

import express from 'express';
const app = express();
const port = 3000;
import router from './routers/index.js';


//openDb();
router(app);

app.listen(port,(error) =>{
    if(error){
        console.log("Deu erro");
        return;
    }
    console.log("Subiu, meu chapa! :)");
});
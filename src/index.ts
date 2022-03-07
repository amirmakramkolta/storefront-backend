import express from 'express';
import bodyParser from 'body-parser';
import { json } from 'stream/consumers';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.listen(port,()=>{
    console.log(`listen to: http://localhost:${port}`);
})

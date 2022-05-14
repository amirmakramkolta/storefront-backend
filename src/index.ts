import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { userRoutes } from './handler/userEndpoints';
import { cateoryRoutes } from './handler/categoryEndpoints';
import { productRoutes } from './handler/productEndpoints';
import { orderRoutes } from './handler/orderEndpoints';

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

userRoutes(app);
cateoryRoutes(app);
productRoutes(app);
orderRoutes(app);

app.listen(port,()=>{
    console.log(`listen to: http://localhost:${port}`);
})

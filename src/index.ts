import express from 'express';
import bodyParser from 'body-parser';
import { userRoutes } from './handler/userEndpoints';
import { cateoryRoutes } from './handler/categoryEndpoints';
import { productRoutes } from './handler/productEndpoints';
import { orderRoutes } from './handler/orderEndpoints';

const app = express();
const port = 3000;

app.use(bodyParser.json());

userRoutes(app);
cateoryRoutes(app);
productRoutes(app);
orderRoutes(app);

app.listen(port,()=>{
    console.log(`listen to: http://localhost:${port}`);
})

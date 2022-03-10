import { Categories, categoryType } from "../model/categories";
import { ProductCategory } from "../serivces/product-category";
import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const categoryForRoutes = new Categories();
const productCategoryForRoutes = new ProductCategory();

export const cateoryRoutes = (app:express.Application)=>{
    app.post("/create-category",async (req:express.Request,res:express.Response)=>{
        try{
            jwt.verify(req.body.token,(process.env.secret as string))
        }catch(err){
            res.status(401)
            res.json(`something wrong ${err}`)
            return
        }
        const dataFromUser:categoryType={
            category_id:0,
            name:req.body.name
        }
        try{
            const data = await categoryForRoutes.create(dataFromUser);
            res.status(200);
            res.json(data);
        }catch(err){
            res.status(400)
            res.json(`something wrong ${err}`)
            return
        }
    });

    app.get("/categories",async(req:express.Request,res:express.Response)=>{
        try{
            const data = await categoryForRoutes.index();
            res.status(200);
            res.json(data);
        }catch(err){
            res.status(400);
            res.json(`something wrong ${err}`)
        }
    });
    app.get("/categories/:id",async(req:express.Request, res:express.Response)=>{
        try{
            const data = await categoryForRoutes.show(parseInt(req.params.id));
            res.status(200);
            res.json(data);
        }catch(err){
            res.status(400);
            res.json(`something wrong ${err}`)
        }
    })
    app.get("/productsIncategory/",async(req:express.Request,res:express.Response)=>{
        try{
            const data = await productCategoryForRoutes.index();
            res.status(200);
            res.json(data);
        }catch(err){
            res.status(400);
            res.json(`something wrong ${err}`);
        }
    })
    app.get("/productsIncategory/:id",async(req:express.Request,res:express.Response)=>{
        try{
            const data = await productCategoryForRoutes.show(parseInt(req.params.id));
            res.status(200);
            res.json(data);
        }catch(err){
            res.status(400);
            res.json(`something wrong ${err}`);
        }
    })
}

import { Products, productType } from "../model/products";
import { ProductCategory } from "../serivces/product-category";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import express from 'express';

dotenv.config();
const productForRoute = new Products();
const productCategoryForRoutes = new ProductCategory();

export const productRoutes = (app:express.Application)=>{
    app.post("/create-product",async(req:express.Request,res:express.Response)=>{
        try{
            jwt.verify(req.body.token,(process.env.secret as string));
        }catch(err){
            res.status(401);
            res.json(`something wrong ${err}`);
            return
        }
        const dataFromUser:productType={
            product_id:0,
            name:req.body.name,
            price:Number(req.body.price),
            category_id:Number(req.body.categoryId)
        }
        try{
            const data = await productForRoute.create(dataFromUser);
            res.status(200);
            res.json(data)
        }catch(err){
            res.status(400);
            res.json(`something wrong ${err}`);
        }
    });
    app.get("/products",async(req:express.Request,res:express.Response)=>{
        try{
            const data = await productForRoute.index();
            res.status(200);
            res.json(data)
        }catch(err){
            res.status(400);
            res.json(`something wrong ${err}`);
        }
    })
    app.get("/products/:id",async(req:express.Request,res:express.Response)=>{
        try{
            const data = await productCategoryForRoutes.show(parseInt(req.params.id));
            res.status(200);
            res.json(data)
        }catch(err){
            res.status(400);
            res.json(`something wrong ${err}`);
        }
    })
}

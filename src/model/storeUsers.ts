import client from "../database";
import dotenv from 'dotenv';
import bycrypt from 'bcrypt';
dotenv.config();

export type userType = {
    store_user_id:number|null,
    first_name:string,
    last_name:string,
    email:string
    hash_password:string
}
export type userTypeNoPassword = {
    store_user_id:number|null,
    first_name:string,
    last_name:string,
    email:string
}

export class Users{
     async index ():Promise<userTypeNoPassword[]>{
         try{
             const connect = await client.connect();
             const sql = "select store_user_id, first_name, last_name, email from store_user";
             const result = await connect.query(sql);
             connect.release();
             return result.rows;
         }catch(err){
             throw new Error(`something wrong ${err}`);
         }
    }
    async create (u:userType):Promise<string>{
        try{
            const connect = await client.connect();
            const sql = "insert into store_user (first_name, last_name, email, hash_password) values ($1, $2, $3, $4)";
            const hash_password = bycrypt.hashSync(u.hash_password+process.env.pepper,parseInt(process.env.salt as string));
            const result = await connect.query(sql,[u.first_name,u.last_name,u.email,hash_password]);
            const sql2="select email from store_user where email = $1";
            const result2 = await connect.query(sql2,[u.email])
            connect.release();
             return result2.rows[0].email;
        }catch(err){
            throw new Error (`something wrong ${err}`)
        }
    }
    async show(email:string):Promise<userTypeNoPassword[]>{
        try{
            const connect = await client.connect();
            const sql = "select store_user_id, first_name, last_name, email from store_user where email = $1";
            const result = await connect.query(sql,[email]);
            connect.release();
            return result.rows;
        }catch(err){
            throw new Error(`something wrong ${err}`);
        }
    }
    async signin(email:string,password:string):Promise<string|null>{
        try{
            const connect = await client.connect();
            const sql = "select * from store_user where email = $1";
            const result = await connect.query(sql,[email]);
            connect.release();
            const user = result.rows[0];
            if(bycrypt.compareSync(password+process.env.pepper,user.hash_password)){
                return result.rows[0].email;
            }else{
                return null;
            }
        }catch(err){
            throw new Error(`something wrong ${err}`);
        }
    }
}
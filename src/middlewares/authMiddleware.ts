import { Request,Response,NextFunction } from "express";
import { ApiResponse, Payload } from "../common/interface";
import jwt from 'jsonwebtoken';
export const authMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    try{
        //req have the headers property and on headers authorization propertry
        //token string ki form me ayega "Beare token" split() array me convert karega
        const token:string=req.headers.authorization
        if(!token){
            res.status(401).json(<ApiResponse>{
                message:"Please provide the token",
                success:false
            })
            return;
        }
        const tokens=token.split(' ')[1];
        //decode the token verify() decode the token and return the payload and also verifyt the token
        const decodeToken:Payload | null=jwt.verify(tokens,process.env.SECRET_KEY as string);
        req.body.userId=decodeToken.userId;
        //next() method return the request to next middleware
        next();
    }catch(e){
        res.status(500).json(<ApiResponse>{
            message:(e as Error).message,
            success:false
        })
    }
}
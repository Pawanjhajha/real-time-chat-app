import { Request,Response,NextFunction } from "express";
import { ApiResponse } from "../common/interface";
import { chatModel } from "../models/chat";

export const createnewChat=async (req:Request,res:Response ,next:NextFunction)=>{
    try{
        const userId=req.body.userId;
        const chat=await chatModel.create(req.body);
        res.status(201).json(<ApiResponse>{
            message:'Chat created Successfully',
            success:true,
            data:{
                chat:chat
            }
        })
    }catch(e){
        res.status(500).json(<ApiResponse>{
            message:(e as Error).message,
            success:false
        })
    }
}
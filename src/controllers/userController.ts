import { Request,Response,NextFunction } from "express";
import { ApiResponse } from "../common/interface";
import { userModel } from "../models/user";

export const me =async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const userId=req.body.userId;
        const user=await userModel.findOne({_id:userId}).select("-password")
        res.status(200).json(<ApiResponse>{
            message:'User fetch successfully',
            success:true,
            data:{
                user:user
            }
        })
    }catch(e){
        res.status(500).json(<ApiResponse>{
            message:(e as Error).message,
            success:false
        })
    }

}
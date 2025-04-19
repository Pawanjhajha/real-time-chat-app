import { Request,Response,NextFunction } from "express";
import { ApiResponse } from "../common/interface";
import { userModel } from "../models/user";
import { Types } from "mongoose";

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
export const allUser=async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const userId=req.body.userId;
        //exclude the currently login user
        const pipeline=[
            {
              $match: {
                _id: {
                  $ne: Types.ObjectId.createFromHexString(userId)
                }
              }
            },
            {
                $project:{
                    password:0
                }
            }
          ]
        const users=await userModel.aggregate(pipeline)
        res.status(200).json(<ApiResponse>{
            message:"All user fetch",
            success:true,
            data:{
                users:users
            }
        })
    }catch(e){
        res.status(500).json(<ApiResponse>{
            message:(e as Error).message,
            success:true
        })
    }
}
import mongoose, { ObjectId } from "mongoose";

export interface ApiResponse {
    message: string;
    success: boolean;
    data?: any;
}

export interface Payload{
    userId:mongoose.Types.ObjectId;
    firstName:string;
    lastName:string;
}

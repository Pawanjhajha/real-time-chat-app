import mongoose, { Types } from "mongoose";
interface IUser extends Document {
    _id: mongoose.Types.ObjectId;  // Explicitly define _id
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    profilePic?: string;
    createdAt: Date;
    updatedAt: Date;
}
const userSchema=new mongoose.Schema<IUser>({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    profilePic:{
        type:String,
        required:false,
    }
},{timestamps:true,versionKey:false})
const userModel=mongoose.model<IUser>('core_users',userSchema);
export { IUser, userModel };
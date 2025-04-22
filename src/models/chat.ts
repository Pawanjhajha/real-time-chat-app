import mongoose from "mongoose";

interface IChat extends Document{
    members:mongoose.Types.ObjectId[],
    lastMessage:mongoose.Types.ObjectId,
    unreadMessageCount:number,
    createdAt: Date;
    updatedAt: Date;
}

const chatSchema = new mongoose.Schema<IChat>({
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    lastMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "messages",
    },
    unreadMessageCount: {
      type: Number,
      default: 0,
    },
  }, { timestamps: true,versionKey:false });
  const chatModel=mongoose.model("chats",chatSchema)
  export {IChat,chatModel}

import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderId:{
    required:true,
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  recieverId:{
    required:true,
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  text:{
    type:String
  },
  image:{
    type:String //it will have url of img
  },
  video:{
    type:String
  }

},{timestamps:true});

const Message = mongoose.model('Message',messageSchema);

export default Message;
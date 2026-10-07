import mongoose from 'mongoose';

async function connectDB() {
  try{
    const mongoUri = process.env.MONGO_URI

    if(!mongoUri){
      throw new Error('MONGO_URI is required')
    }else{
      await mongoose.connect(mongoUri)
      .then(()=>console.log('connection to mongodb sucessful'))
      .catch((err)=>{
        console.log("error occur ",err);
      })
    }

  }catch(err){
console.log("error occur to connect to mongodb ",err);
process.exit(1);
//1 failed
  }
}

export default connectDB;
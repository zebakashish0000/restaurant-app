import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "RESTAURANT"
    }).then(()=>{
        console.log("connected to db successfully pheww")
    }).catch(err=>{
        console.log('some error occuring while connecting to db ${err}');
    })
}
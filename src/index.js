import dotenv from "dotenv";
import {app} from "./app.js";
import {connectDB} from './db/index.js';
dotenv.config({
    path:"./.env"
});
const PORT=process.env.PORT||8001;
connectDB().
then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })
}).catch((err)=>{
    console.log("mongodb connection error", err);
});// in cors_origin you want to mention that what  is allowed to make the request

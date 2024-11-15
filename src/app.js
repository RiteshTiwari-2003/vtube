import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app=express();
//middleware are in between configuration so you can do certain things in between, for example , a request come to your server and your server is going to respond to that request but should youe server respond to that server or
//request should not come to you or if that request comew to you in between, iwant to manipulate that, i want to do something like access cookies
//or maybe i want to inject some objects
app.use(cors({//now common question is who should be able to talk to the database is basically cors cross origin resourse policy
    origin:process.env.CORS_ORIGIN,
    credential:true
}));
//now we use express middleware
//common middleware
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static("public"));
app.use(cookieParser());

//import routes
import healthcheckRouter from "./routes/healthcheck.routes.js";
import userRouter from "./routes/user.routes.js"
import errorHandler from "./middlewares/error.middlewares.js";
//routes
app.use("/api/v1/healthcheck",healthcheckRouter);
app.use("api/v1/users",userRouter);
app.use(errorhandler)


export {app};
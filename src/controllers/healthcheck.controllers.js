import {ApiResponse} from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
const healthcheck=asyncHandler(async(req,res)=>{
    return res.status(200).json(new ApiResponse(200,"OK","Healt Check Passed"));
});
export {healthcheck};
//each of model get controller and each pof controller get routes, so this concept followed by backend project
/*a health check routes is a specific endpoint in a backend project(often /health,/status or /healthcheck), that when accessed , return the current application and its components,
its typially used to verify the application is running currectly and that dependencies like database , catches third party service are available

why health check route are needed
uptime monitering:
they help mmoniter uptime and provide insight into whether the application running as expected.
dependency verification: health checks can also confirm whether dependent service (like database and third party api) are accessable and functionaly properly

integration with ci cd pipeline: health check api also used in continuous deployment pipeline to ensure the application is healthy before the new virson is depliyed.

load balancing and auto scalling: many load balancer and orchestration tools (like kubernetes) use health check routes to determine if an instance is healthy or not,if an instanse is failed a health check, it cna be automaticaly taken out of rotation and restart.

implementing a basic health check 
const express=require("express");
const app=express();
const PORT=process.env.PORT || 3000;
//health check routes
app.get('/health',async(req,res)=>{
    try{
    //check database connection here and other dependencies here
    res.status(200).json({status:"ok",uptime:process.uptime()})}
    catch(error){
    res.status(500).json({status:"Error",message:dependencies not available})}};
app.listen(PORT,()=>{
    console.log("server is running on ${port}")}*/
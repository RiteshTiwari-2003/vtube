import { asyncHandler } from "../utils/asyncHandler"
import {ApiError} from "../utils/ApiError.js";
import {User} from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const registerUser=asyncHandler(async(req,res)=>{
    const {fullName,email,username,password}=req.body;
    //validation
    if(
        [fullname,username,email,password].some((field)=>{
            field?.trim()===""
        })
    ){
        throw new ApiError(400,"all fields are required");
    }
    const existedUser=await User.findOne({
        $or:[{username},{email}]
    })
    if(existedUser){
        throw new ApiError(409,"user with email or usernme already exist");
    }
    const avatarLocalPath=req.files?.avatar[0]?.path;
    const coverLocalPath=req.files?.coverImage[0]?.path;
    if(!avatarLocalPath){
        throw new ApiError(400,"avatar file is missing ");
    }
    const avatar=await uploadOnCloudinary(avatarLocalPath);
    let coverImage="";
    if(coverLocalPath){
        coverImage=await uploadOnCloudinary(coverImage);
    }
    const user=await User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
    });
    const createdUser=await User.findById(user._id).select(
        "-password -refreshToken" 
    );
    if(!createdUser){
        throw new ApiError(500,"Something went wrong while registering a user");
    }
    return res.status(201).json(new ApiResponse(200,createdUser,"user registered successfully"));

});
export {registerUser};
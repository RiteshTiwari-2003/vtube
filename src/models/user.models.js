import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true

    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true,
    },
    avatar:{
        type:String,
        required:true,

    },
    coverImage:{
        type:String,
    },
    watchHistory:[{
        type:Schema.Types.ObjectId,
        ref:"Video"
    }],
    password:{
        type:"String",
        required:[true,"password is required"]
    },
    refreshToken:{
        type:String,

    }


},{
    timestamps:true
});
userSchema.pre("save",async function(next){//all these middleware that you writting is require some next,because request and response and third parameter is next,next is the way to pass on your request from one middleware to next middleware.
    if(!this.modified("password")) return next();
    this.password=bcrypt.hash(this.password,10);
    next();

});
userSchema.methods.isPasswordCorrect=async function(password){ return await bcrypt.compare(password,this.password);}
//now lets go ahead and create a access token, access token is somthing that we are storing we are not storing but refrwsh token we are storing, but process of generating them is almost same
userSchema.methods.generateAccessToken=function(){
    //simple and short lived access token
    // the short lived means the expiry time is totaly depend on you that how much you want to expire it or go with that.
    return jwt.sign({_id:this._id,
        email:this.email,
        username:this.username,
        fullname:this.fullname
    },process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    });
}
userSchema.methods.generateRefreshToken=function(){
    return jwt.sign({_id:this._id,
    },process.env.REFREASH_TOKEN_SECRET,{
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    });
}
videoSchema.plugin(mongooseAggregatePaginate);
export const User=mongoose.model("User",userSchema)


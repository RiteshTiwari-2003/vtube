import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
//configure cloudinary
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET//click view credential below to copy your api secret
});
const uploadOnCloudinary=async(localFilePath)=>{
    try{
        if(!localFilePath){
            return null;
        }
        const response=cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        });
        console.log("file uploaded on cloudinary. file src:"+response.url);
        //once the file is uploadede , we would like to delete it from the server
        fs.unlinkSync(localFilePath);
        return response;

    }catch(error){
        fs.unlinkSync(localFilePath);
        return null;
    }
}
export {uploadOnCloudinary};

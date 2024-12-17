import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

cloudinary.config({
    cloud_name: process.env.cloudinary_name,
    api_key: process.env.cloudinary_api_key,
    api_secret: process.env.cloudinary_api_secret
})

const uplodeOnCloudinary = async (localfilepath) => {
    try {
        if (!localfilepath) return null // negitive cheking if file not recive return null 
        // if file have then uplode file on cloudinary
        const response = await cloudinary.uploader.upload(localfilepath, {
            resource_type: 'auto'
        })
        // file has been successfuly uploded
        console.log('file has been uploded successfully');
        console.log(response, ' this is response');
        console.log(response.url, ' this is response url');
        return response;
    } catch (error) {
        fs.unlinkSync(localfilepath) // remove the localy saved temprory file as the uplode operation got failed  
        return null
    }
}

export { uplodeOnCloudinary }
import { async_handler } from "../utils-utilities/async_handler.js";
import { api_error } from "../utils-utilities/api.error.js";
import { User } from "../models/user.model.js";
import { uplodeOnCloudinary } from "../utils-utilities/Cloudinery.js";
import { api_response } from "../utils-utilities/api_response.js";
export const registerUser = async_handler(async (req, res) => {
    // steps for resgester user => 


    //  get user details from front-end  by postman   || details like => userman email etc 
    // validation  => check user should not send empty data , empty-email , empty-user-name , correct formetting
    //check if use already exists : checking by email,username
    // checking files => user should send avatar,images 
    // if files is availabe then send on cloudinery-utilitys
    // after uplode filr on cloudnery check is corrcectly uploded or not 
    //  create user-obj for send data on mongobd and mongi db no sequal thats why make obj and create entry in db
    //  remove password and refresh tooken  firld from response after created user 
    // check for user creation  || user created or not 
    // if user created then send response



    /////////////////////////////
    //  get user details from front-end  by postman   || details like => userman email etc 
    const { username, email, fullname, password } = req.body
    console.log(username, "that is uername");


    // validation  => check user should not send empty data , empty-email , empty-user-name , correct formetting
    if ([username, email, fullname, password].some((fields) => fields?.trim() === '')) {
        throw new api_error(400, "all fieldes are  required")
    }

    //check if use already exists : checking by email,username
    const existedUser = User.findOne({
        $or: [{ email }, { username }]
    })
    console.log(existedUser);
    if (existedUser) {
        throw new api_error(409, 'User with email or username already exist')
    }

    // checking files => user should send avatar,images 
    const avatarLocalPath = req.files?.avatar[0]?.path
    const coverImageLOcalPath = req.files?.converimage[0]?.path
    console.log('avatarLOcalPath', avatarLocalPath);
    console.log('coverImageLOcalPath', coverImage);

    if (!avatarLocalPath) {
        throw new api_error(400, 'avatar files is required')
    }

    // if files is availabe then send on cloudinery-utilitys
    const Avatar = await uplodeOnCloudinary(avatarLocalPath)
    const CoverIMage = await uplodeOnCloudinary(coverImageLOcalPath)
    // after uplode filr on cloudnery check is corrcectly uploded or not 
    if (!Avatar) {
        throw new api_error(400, 'Avatar file is requored')
    }


    //  create user-obj for send data on mongobd and mongi db no sequal thats why make obj and create entry in db
    const UserCreated = await User.create({
        fullname,
        avatar: Avatar.url,
        converimage: CoverIMage?.url || '',
        email,
        password,
        username: username.toLowerCase()
    })
    // after created userAccunt in db checking is user is realy created or not  and if creted then remove from the response obj password and refreshtoken
    const CreatedUserIsAvilable = await User.findById(UserCreated._id).select(
        '-password -RefreshToken'
    )
    // if user not creted the error handle 
    if (!CreatedUserIsAvilable) {
        throw new api_error(500, 'somthing went wrong while registoer/making-user by server')
    }


    // if user created then send response useing api.response utilities
    return res.status(201).json(
        new api_response(200,CreatedUserIsAvilable,'User REgistor Succsefully')
    )

})


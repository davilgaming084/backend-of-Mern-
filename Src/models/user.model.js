import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const UserSChema = new Schema({
    username: {
        type: String,
        required: true,
        uniqe: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        uniqe: true,
        lowercase: true,
        trim: true,
    }, fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String, // cludnery service url 
        required: true,


    },
    converimage: {
        type: String, // cludnery service url 
    },
    watchhistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: 'password is required'
    },
    refreshToken: {
        type: String,

    }
}, { timestamps: true })
UserSChema.pre('save', async function (next) {
    if (this.isModified('password')) return next() // checking in nevative if password not modify then direct send next if pass modifiend then go next 51 line and encript modify pass
    this.password = bcrypt.hash(this.password, 10)
    next()
})
UserSChema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}
UserSChema.methods.genrateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
UserSChema.methods.refreshToken = function () {
    return jwt.sign(
        {
            _id:this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
export const User = mongoose.model("User", UserSChema)
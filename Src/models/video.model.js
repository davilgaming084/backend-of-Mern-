import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const VideoSchema = new Schema({
    videoFile: {
        type: String, // get by cloudnary 
        required: true,

    },
    thumbnail: {
        type: String,// get by cloudnary 
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'USer'
    },
    title: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    duration: {
        type: String, // get by cloudnary 
        required: true
    },
    viwes: {
        type: Number,
        default: 0,
    },
    ispublish: {
        type: Boolean,
    }
}, { timestamps: true })
VideoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", VideoSchema)
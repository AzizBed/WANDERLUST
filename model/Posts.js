const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,

       // ref:"User"
       
    },
    firstName: {
        type: "string",
    },
    lastName: {
        type: "string",
    },
    /*img: {
        type: "string",
    },*/
    destination: {
        type: String,
        required: true,
    },
    check_in: {
        type: "string",
        required: true,
    },
    check_out: {
        type: "string",
        required: true,
    },
    nbreOfGuests: {
        type: "number",
        required: true,
    },
    description: {
        type: "string",
        required: true,
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
            },
        },
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
            },
            text: {
                type: String,
                required: true,
            },
            name: {
                type: String,
            },
            lastName: {
                type: String,
            },
            img: {
                type: String,
            },
            date: {
                type: Date,
                default: Date.now,
            },
        },
        //Report{
            //type:Number
        //}
    ],
    //Report{
//type:Number
    //}
    date: {
        type: Date,
        default: Date.now,
    },
}, {timestamsp : true});

module.exports = Post = mongoose.model("post", PostSchema);

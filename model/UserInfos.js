const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const userInfosSchema = new Schema({
    FirstName : {
        type: "string",
        required: true,
    },
    LastName : {
        type:"string",
        required : true,
    },
    Age : {
        type : "number",
        required : true,
    },
    Country : {
        type : 'string',
        required : true
    },
    PhoneNumber : {
        type : 'number',
        required : true
    },
    Languages : ["string"],
    Education : "string",
    Occupation : "string",
    Hobbies : "string",
    AboutMe : "string",
    CountriesIvisited: ["string"]
     
}, {timestamps : true})

module.exports = UserInfos = mongoose.model("userinfo", userInfosSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userInfosSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
        },
        FirstName: {
            type: "string",
            required: true,
        },
        LastName: {
            type: "string",
            required: true,
        },
        Rating: {
            type: "Number",
        },


      //  Reports{
    //        type:"Number"
      //  },
      //PhoneNumber{
          //type :Number
      //}
// FaceBookId{
    //type:"string"
//}

        DayOfBirth: {
            type: "number",
            required: true,
        },
        MonthOfBirth: {
            type: "string",
            required: true,
        },
        YearOfBirth: {
            type: "number",
            required: true,
        },
        Age: {
            type: "number",
        },
        Gender: {
            type: "string",
            required: true,
        },
        Country: {
            type: "string",
            required: true,
        },
        PhoneNumber: {
            type: "number",
            required: true,
        },
        Languages: ["string"],
        Education: ["string"],
        Occupation: "string",
        Hobbies: ["string"],
        AboutMe: "string",
        CountriesIvisited: ["string"],
    },
    { timestamps: true }
);

module.exports = UserInfos = mongoose.model("userinfo", userInfosSchema);

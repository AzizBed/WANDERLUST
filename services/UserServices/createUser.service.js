const UserInfos = require("../../model/UserInfos");
const User = require("../../model/User")
module.exports = {
    async CreateUser(
        Age,
        Country,
        PhoneNumber,
        Languages,
        Occupation,
        AboutMe,
        CountriesIvisited,
        id
    ) {
        try {
            const user = await User.findById(id);
            // const date = new Date.now();
            // const currentYear = date.getFullYear();
            // console.log(currentYear);
            return await UserInfos.create({
                FirstName: user.FirstName,
                LastName: user.LastName,
                Age,
                Country,
                PhoneNumber,
                Languages,
                Occupation,
                AboutMe,
                CountriesIvisited,
            });
        } catch (err) {
            console.log(err);
            return err;
        }
    },
};
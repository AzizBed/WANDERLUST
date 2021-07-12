const services = require("../../services")
module.exports = {
    async ReadUser (req, res) {
        try {
        const Users = await services.userService.getUser.GetUser()
        res.status(200)
        res.json({status : true, message:"users", Users})
        } catch (err) {
            res.status(500).json({status : false, message:err});
            console.log(err)
        }

    }
}
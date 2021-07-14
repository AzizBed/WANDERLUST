// Validation
const Joi = require("joi");

// Register Validation
const RegisterValidation = (data) => {
    const schema = Joi.object({
        FirstName: Joi.string().required(),
        LastName: Joi.string().required(),
        DayOfBirth: Joi.number().required(),
        MonthOfBirth: Joi.string().required(),
        YearOfBirth: Joi.number().required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string()
            .min(8)
            .required()
            .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
        repeat_password: Joi.ref("password"),
    });
    return schema.validate(data);
};
// const LoginValidation = (data) => {
//     const schema = Joi.object({
//         email: Joi.string().min(6).required().email(),
//         password: Joi.string()
//             .min(8)
//             .required()
//             .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
//     });
//     return  schema.validate(data);
// };

module.exports.RegisterValidation = RegisterValidation;
// module.exports.LoginValidation = LoginValidation;

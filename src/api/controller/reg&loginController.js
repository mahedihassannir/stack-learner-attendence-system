const User = require("../../models/UserModel/UserModel");
const jwt = require("jsonwebtoken");
const { registerService, loginService } = require("../../services/authServices");
const chalk = require("chalk");

const regController = async (req, res, next) => {

    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(203).json({ error: "provide name email password" });
    };
    try {

        const result = await registerService({ name, email, password });
        res.status(201).json({ success: "account created successfully", result });
        console.log(chalk.bgGreen(result))
    } catch (e) {
        console.log(e.message);
        next(e)
    };



};

const loginController = async (req, res,) => {
    console.log(req.body);


    const { email, password } = req.body;
    if (!email) {
        return console.log("he he he ");
    };



    try {
        const user = loginService({ email, password });

        const payload = {
            _id: user._id,
            name: user.name,
            email: user.email,

        };

        // create a jwt token
        const token = jwt.sign(payload, "12345678", {
            expiresIn: "1d",
        });
        // res
        res.status(200).json({ success: "logged in successfully", token });



    } catch (e) {
        console.log(e.message);
    };
};
module.exports = { regController, loginController }
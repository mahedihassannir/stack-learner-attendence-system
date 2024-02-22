const chalk = require("chalk");
const User = require("../models/UserModel/UserModel");
const errHelper = require("../utils/errHelper");
const { userFinder, createNewUser } = require("./user");

const registerService = async ({ name, email, password }) => {
    console.log(name, email, password, "it is from the services");

    const checkExistence = await User.findOne({ email })
    console.log(checkExistence);
    if (checkExistence) throw errHelper("user already exist", 400);


    return createNewUser({ name, email, password })


};

const loginService = async ({ email, password }) => {

    const user = await User.findOne({ email });
    if (!user) {
        const error = new Error("invalid credinatial");
        error.status = 401;
        throw error;
    };

    if (password !== user.password) {
        const error = new Error("invalid credinatial");
        error.status = 401;
        throw error;
    };
    
    console.log(user,chalk.bgRed("i am from login service"))

};

module.exports = {
    registerService,
    loginService
};
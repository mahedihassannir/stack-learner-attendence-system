const User = require("../models/UserModel/UserModel");

const userFinder = ({ key, value }) => {

    if (key === "_id") {
        return User.findById(value);
    };

    return User.findOne({ [key]: value });


};


const createNewUser = ({ name, email, password }) => {


    const createUser = new User({
        name, email, password
    });

    console.log(createUser);
    return createUser.save();

};


const findAllUser = () => {

    return User.find()

}

const updateUserById = ({ id }) => {
    return User.findByIdAndUpdate(id, {
        $set: { name: User.name, email: User.email, password: User.password }
    })
}

const deleteUser = (id ) => {

    return User.findByIdAndDelete(id)

}

module.exports = {
    userFinder,
    createNewUser,
    findAllUser,
    updateUserById,
    deleteUser,

};
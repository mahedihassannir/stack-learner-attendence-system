const { findAllUser, userFinder, updateUserById, deleteUser } = require("../../../services/user");

const getAllUser = async (req, res) => {
    try {

        const result = await findAllUser();

        console.log(result);

        res.status(200).json({ success: "got all the user", result });


    } catch (e) {

        console.log(e.message)

    };


};

const getUserById = async (req, res) => {
    const { userId } = req.params

    try {

        const result = await userFinder("_id", userId);

        console.log(result)
        res.status(200).json({ success: "got the user by id", result });



    } catch (e) {

        console.log(e.message)

    };


};

const patchUserById = async (req, res) => {
    const { userId } = req.params

    try {

        const result = await updateUserById({ id: userId });

        console.log(result)

        res.status(200).json({ success: "user updated", result });

    } catch (e) {

        console.log(e.message)

    };


};


const deleteUserById = async (req, res) => {
    const id= req.params.userId
    try {

        const result = await deleteUser(id);

        console.log(result);

        res.status(203).send();

    } catch (e) {

        console.log(e.message)

    };



};

module.exports = {
    getAllUser,
    getUserById,
    patchUserById,
    deleteUserById
};
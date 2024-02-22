const { use } = require("../api/route/authRoute");
const User = require("../models/UserModel/UserModel");
const jwt = require("jsonwebtoken");
const verifyJwt = async (req, res, next) => {
    try {

        let token = req.headers.authorization; //we get the token from the client;
        console.log(token);
        token = token.split(" ")[1]; // then we get only the bearer token not the bearer we split the only token value; 

        if (!token) { // not token return with message
            return res.status(401).json({ message: "unAuthorized" });
        };

        const decoded = jwt.verify(token, "12345678"); // verify with the env token;
        const user = await User.findById(decoded._id);

        if (!user) {
            return res.status(401).json({ message: "unAuthorized" });

        };

        req.user = user
        next()

    } catch (e) {
        console.log(e.message)
    }
}


module.exports = verifyJwt
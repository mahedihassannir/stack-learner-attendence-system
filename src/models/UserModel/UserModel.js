const { Schema, model } = require("mongoose");

const RegisterSchema = new Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    roles: {
        type: [String],
        default: ["Student"],
        require: true,

    },
    AccountStatus: {
        type: String,
        enum: ["PENDING", "ACTIVE", "REJECTED"],
        default: "PENDING",
        require: true
    }


})

const User = model("attendenceUser", RegisterSchema)

module.exports = User;
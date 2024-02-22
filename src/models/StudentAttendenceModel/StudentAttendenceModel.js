const { Schema, model } = require("mongoose");

const StudentattendenceSchema = new Schema({
    createdAt: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: "attendenceUser",
        require: true
    },
    Adminattendence: {

        type: Schema.Types.ObjectId,
        ref: "Adminattendence",
        require: true

    }


})

const Studentattendence = model("Studentattendence", StudentattendenceSchema)

module.exports = Studentattendence;
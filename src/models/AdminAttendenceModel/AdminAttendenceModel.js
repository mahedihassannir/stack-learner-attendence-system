const { Schema, model } = require("mongoose");

const AdminattendenceSchema = new Schema({


    timeLimits: {
        type: Number,
        min: 5,
        max: 30,
        default: 5
        , required: true
    },
    status: {
        type: String,
        progress: ["ON", "OFF"],
        default: "ON",
        required: true,
    },
    
},{timestamps:true})

const Adminattendence = model("Adminattendence", AdminattendenceSchema)

module.exports = Adminattendence;
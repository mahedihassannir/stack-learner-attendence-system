const { Schema, model } = require("mongoose");

const profileSchema = new Schema({


    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "attendenceUser",
        require: true
    },
    bio: {
        type: String,
        require: true,
        minLength: 5,
        maxLength: 30,
    },
    title: {
        type: String,
        require: true,
        minLength: 5,
        maxLength: 30,
    },
    links: {
        website: {
            type: String,
        },
        github: {
            type: String,
        },
        twitter: {
            type: String,
        }

    }
})

const Profile = model("attendenceprofile", profileSchema)

module.exports = Profile;
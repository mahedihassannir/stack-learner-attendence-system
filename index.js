require("dotenv").config();
const chalk = require("chalk");
const express = require('express');
const { default: mongoose } = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
const morgan = require("morgan");
const authRoute = require("./src/api/route/authRoute")
const adminCrudRoute = require("./src/api/route/AdminuserCrudRoute/AdminuserCrudRoute");
const verifyJwt = require("./src/middlewares/jewVerify");
const AdminattendenceONOFF = require("./src/api/route/admin-on-of/admin-on-of-routes")


app.use(express.json());

app.use(morgan("dev"));

// app.use(routeHandler)
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/admin", verifyJwt, adminCrudRoute)
app.use("/api/v1/attendenceonoff", verifyJwt, AdminattendenceONOFF)


// const uri = `mongodb+srv://mongoosemahedi:mongoosemahedi@cluster0.aiamri8.mongodb.net/?retryWrites=true&w=majority`
const uri = `mongodb+srv://mahedi:mahedi@cluster0.ph1pvw8.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(uri, {
    useNewUrlParser: true
})
    .then(() => {


        console.log(chalk.bgGreen("DATABASE IS CONNECTED"))

        app.get("/", (req, res) => {
            res.send("server is running");
        });

        app.listen(port, () => {
            console.log(chalk.bgBlue(`server is running on port ${port}`));
        });



    })
    .catch(e => {
        console.log(e)
    })
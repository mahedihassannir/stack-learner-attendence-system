const Adminattendence = require("../../../models/AdminAttendenceModel/AdminAttendenceModel");


const offController = async (req, res, next) => {
    const { id } = req.params;
    
    try {
        
        const off = await Adminattendence.findById({id})
        
        off.status = "OFF"
        await off.save({})
        res.send(off)
        
        
    } catch (error) {
        console.log(error.message)
    };

// done
};
const onController = async (_req, res, next) => {

    try {

        const onStatus = new Adminattendence({});

        const status = await onStatus.save();
        console.log(status)

        res.status(201).json({ message: "attendeance is on " })

    } catch (error) {
        console.log(error.message)
        next(error)
    }


};

const statusController = async (req, res, next) => {

    try {

        const status = await Adminattendence.find()
        res.send(status)

    } catch (error) {
        console.log(error.message)
    }
};


module.exports = {
    onController, offController, statusController
}
const router = require("express").Router();
const verifyJwt = require("../../middlewares/jewVerify");
const { regController, loginController } = require("../controller/reg&loginController");




router.post("/reg", regController);
router.post("/login", loginController);

router.get("/user", verifyJwt, async (req, res) => {


    res.send(req.user);

});

module.exports = router;

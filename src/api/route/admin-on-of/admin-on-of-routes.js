const router = require("express").Router();

const controllers = require("../../controller/admin-attendence-on-offControllers/on-off-status-controller")


router.get("/:id", controllers.offController)
router.get("/on", controllers.onController)
router.get("/status", controllers.statusController)

module.exports=router;


//? on this file the all the route here of admin curd on 
const router = require("express").Router();
const UserCrud = require("../../controller/userCrud/userCrud")

router.get("/:userId", UserCrud.getUserById);
router.patch("/userId", UserCrud.patchUserById);
router.delete("/:userId", UserCrud.deleteUserById);
router.get("/", UserCrud.getAllUser);

module.exports = router;
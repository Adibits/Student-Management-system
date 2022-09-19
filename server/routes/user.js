const express= require("express");
const router=express.Router();
const usercontroller= require('../controllers/usercontroller');


router.get("/", usercontroller.view);
router.post("/",usercontroller.find);
router.get("/:id",usercontroller.delete);
router.get("/adduser", usercontroller.form);
router.post("/adduser", usercontroller.create);
router.get("/edituser/:id", usercontroller.edit);
router.post("/edituser/:id", usercontroller.update);
router.get("/viewuser/:id", usercontroller.viewall);
//routes


module.exports = router;
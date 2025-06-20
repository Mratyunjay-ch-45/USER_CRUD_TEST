const express = require("express");
const router = express.Router();
const { createUser, loginUser,updateUser,deleteUser } = require("../controller/user.js");
const User = require("../models/user");

router.post("/signup", createUser);
router.post("/login", loginUser);
router.get("/getuser", async (req, res) => {
    const email = req.query.email;
    if (!email) return res.status(400).json({ message: "Email is required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ user });
});
router.put("/updateuser", updateUser);
router.delete("/deleteuser", deleteUser);




module.exports = router;

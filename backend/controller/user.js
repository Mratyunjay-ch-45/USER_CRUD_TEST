const User = require("../models/user");
const bcrypt = require("bcryptjs");

// CREATE USER (Signup)
exports.createUser = async (req, res) => {
    try {
        const { fname, lname, dob, email, password, gender } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            fname,
            lname,
            dob,
            email,
            password: hashedPassword,
            gender
        });

        await newUser.save();
        res.status(201).json({ message: "User created successfully", user: newUser });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// LOGIN USER
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

        // Success
        res.status(200).json({ message: "Login successful", user });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

exports.updateUser = async (req, res) => {
    const { email } = req.query;

    try {
        const updated = await User.findOneAndUpdate({ email }, req.body, {
            new: true,
            runValidators: true
        });

        if (!updated) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated", user: updated });
    } catch (err) {
        res.status(500).json({ message: "Error updating user", error: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    const { email } = req.query;

    try {
        const deletedUser = await User.findOneAndDelete({ email });

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};



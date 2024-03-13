    const User = require('../models/usermodels');

    exports.createUser = async (req, res) => {
        try {
            const user = new User(req.body);
            await user.save();
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    exports.getUsers = async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    exports.getUserById = async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    exports.updateUser = async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    exports.deleteUser = async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(204).json({ message: 'User deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
    exports.registerUser = async (req, res) => {
        try {
            const { name, email, password } = req.body;
    
            // Check if user with email already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email already registered' });
            }
    
            // Create a new user
            const newUser = new User({ name, email, password });
            await newUser.save();
    
            res.status(201).json({ message: 'User registered successfully', user: newUser });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
    
    
    



















    // exports.registerUser = async (req, res) => {
    //     try {
    //         const user = await User.findByregisteremail(req.params.email);
    //         if (!user) {
    //             return res.status(404).json({ message: 'User not found' });
    //         }
    //         res.status(200).json(user);
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // };
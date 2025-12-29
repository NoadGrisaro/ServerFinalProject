const User = require('../models/user');

module.exports ={
    getAllUsers:async(req, res)=>{
        try {
            const users = await User.find(); 
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createUser:async(req, res)=>{
        try {
            const newUser = new User(req.body);
            await newUser.save(); 
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    updateUser:async(req, res)=>{
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'User deleted successfully!!!' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};
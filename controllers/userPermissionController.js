const UserPermission = require('../models/userPermission');

module.exports = {
    getAllUserPermissions:async(req, res)=>{
        try {
            const connections = await UserPermission.find()
                .populate('userId')
                .populate('permissionId');
            res.status(200).json(connections);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    },

    createUserPermission:async(req, res)=>{
        try {
            const newConnection = new UserPermission(req.body);
            await newConnection.save();
            res.status(201).json(newConnection);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },

    updateUserPermission:async(req, res)=>{
        try {
            const updatedConnection = await UserPermission.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(updatedConnection);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },

    deleteUserPermission:async(req, res)=>{
        try {
            await UserPermission.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'Connection deleted' });
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
};
const Permission = require('../models/permission');

module.exports = {
    getAllPermissions:async(req, res)=>{
        try {
            const permissions = await Permission.find();
            res.status(200).json(permissions);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    createPermission:async(req, res)=>{
        try {
            const newPermission = new Permission(req.body);
            await newPermission.save();
            res.status(201).json(newPermission);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    updatePermission:async(req, res)=>{
        try {
            const updatedPermission = await Permission.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(updatedPermission);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    deletePermission:async(req, res)=>{
        try {
            await Permission.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'Permission deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};
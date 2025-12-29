const express = require('express');
const mongoose = require('mongoose');

const userRouter = require('./routers/userRouter');
const permissionRouter = require('./routers/permissionRouter');
const userPermissionRouter = require('./routers/userPermissionRouter');

const logger = require('./middleware/logger');

const app = express();
const port = 3000;

app.use(express.json()); 
app.use(logger); 

app.use('/users', userRouter);
app.use('/permissions', permissionRouter);
app.use('/user-permissions', userPermissionRouter);

app.get('/', (req, res) => {
    res.send('logged to server Successfully');
});

mongoose.connect('mongodb://localhost:27017/myProjectDB')
    .then(() => {
        app.listen(port, () => {
            console.log(`server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error('error connecting to mongoDB:', err);
    });
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routers/userRouter');
const permissionRouter = require('./routers/permissionRouter');
const userPermissionRouter = require('./routers/userPermissionRouter');
const logger = require('./middleware/logger');



const app = express();
const port = 3000;



app.use(express.json()); //public node.the first node in our chain. from text it become json object
app.use(logger); //public node.the indecator the req indeed reached our server.


app.use('/users', userRouter);//private node.
app.use('/permissions', permissionRouter);//private node.
app.use('/user-permissions', userPermissionRouter);//private node.



app.get('/', (req, res) => {
    res.send('Welcome to my server!!! :)');
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
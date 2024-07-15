require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(express.json());

app.use('/api/todos', todoRoutes);

mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log('MongoDb connection successfull'))
    .catch(error=>console.log(error));

const PORT = process.env.PORT || 3000 ;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
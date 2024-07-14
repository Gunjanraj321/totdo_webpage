require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log('MongoDb connection successfull'))
    .catch(error=>console.log(error));

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
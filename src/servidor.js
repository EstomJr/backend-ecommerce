const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const lookRoutes = require('./routes')

const app = express();

app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://prepi:prepi123@cluster0-qotnv.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use('/look', lookRoutes)

app.listen(3333);
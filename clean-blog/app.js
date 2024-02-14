const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

const Post = require('./models/post'); 
const pageRouter = require('./router/pageRouter');
mongoose.connect('mongodb://127.0.0.1/cleanblog-test-db');


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', pageRouter);

app.listen(process.env.PORT || 3000, _=>{
    console.log('proje aktif');
})
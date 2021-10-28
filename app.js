//import { Express } from 'express';
//import { bodyParser } from 'body-parser';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const dotenv = require('dotenv');


/*app.get('/',(req,res)=>{
    res.send("Hello!!!!");
});

app.get('/employees',(req, res)=>{
    res.send("Employees!!!");
});*/

const connectDB = require('./config/db');

//load config
dotenv.config({ path:'./config/config.env' });
connectDB();

app.use('/', require('./routes/index'));
app.listen(3000);


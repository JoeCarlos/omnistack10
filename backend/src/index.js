const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

    const app = express();

    mongoose.connect('mongodb+srv://JoeCarlos:Relatorio42@cluster0.d1quo.mongodb.net/DevDB?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });   

    
    app.use(express.json());
    app.use(routes);
    
    app.listen(3333);
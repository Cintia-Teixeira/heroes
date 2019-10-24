const express = require('express');
const mongoose = require('mongoose');
const cors = requires('cors');
const path = require('path');

const routes = require('./routes');

mongoose.connect('mongodb+srv://CinTeixeira:<password>@cin-cluster-geuld.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000);
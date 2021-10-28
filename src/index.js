const express = require('express');
const port = 5000;
const app = express();
const initHandlebars = require('./config/handlebars.js');

initHandlebars(app);
app.all('/', (req, res) => {
    res.render('index');

});


app.listen(port, () => console.log(`Life is good!!! Yor server is running on port ${port}...`));
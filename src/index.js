const express = require('express');
const port = 5000;
const app = express();
const path = require('path');

const handlebars = require('express-handlebars');
app.set('views', path.resolve('./src/views'))
app.engine('hbs', handlebars({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

app.all('/', (req, res) => {
    res.render('index');

});


app.listen(port, () => console.log(`Life is good!!! Yor server is running on port ${port}...`));
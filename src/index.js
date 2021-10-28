const express = require('express');
const port = 5000;
const app = express();


app.all('/', (req, res) => {
    res.write("It's working");
    res.end();
})


app.listen(port, () => console.log(`Life is good!!! Yor server is running on port ${port}...`));
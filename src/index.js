const express = require('express');



const port = 5000;
const app = express();
app.listen(port, () => console.log(`Life is good on port ${port}...`));
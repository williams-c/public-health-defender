const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('../client/dist'));
app.use(express.json());

// Listening for requests on the PORT
app.listen(PORT, () => {
    console.log('Serving up now at '+ PORT)
});
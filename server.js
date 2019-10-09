require('dotenv').config();
const express = require('express')

const app = express();
const port = process.env.PORT || 3000;

//set public as root
app.use(express.static('public'));

//Allow front-end access to node_modules folder
app.use('/scripts', express.static(`${_dirname}/node_modules/`));

// Listen for HTTP requests on port 
app.listen(port, ()=>{
    console.log('listening on %d', port)
});
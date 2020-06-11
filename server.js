const express = require('express');

const app = express();


app.use(express.static('public'));


const PORT = 8080;


app.listen(PORT, (err) => {
  if (err) {
    console.log('Could not connect the server: ', err)
  } else {
    console.log('App listening on port: ', PORT)
  }
})
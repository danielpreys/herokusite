const express = require('express')
const path = require('path')
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 5000


express()
  .use(express.static(__dirname + "/public"))  
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.sendFile(__dirname +  '/views/index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


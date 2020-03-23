const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
app.use(bodyParser.json()); // for parsing application/json

// ----------------NODEMAILER---------------------------------------------------------------------------------------

const nodemailer = require("nodemailer");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/api/form', (req,res) => {
  // console.log(req.body)
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'danyka.mosciski@ethereal.email',
        pass: 'gTPQ7pzJdnGqf8bjmY'
      }
    })
    let mailOptions = {
      from:'info@wjbest.com',
      to:'danyka.mosciski@ethereal.email',
      replyTo:'info@wjbest.com',
      subject:'New Message',
      text: req.body.message,
      html: htmlEmail
    }
    transporter.sendMail(mailOptions, (err,info) => {
      if (err) {
        return console.log(err)
      }
      // console.log('Message sent: %s', info.message);
      // console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
    })
  })
});

// ----------------------------------------------------------------------------------------------------------------



const PORT = process.env.PORT || 3001;
require('dotenv').config();
// const passport = require('passport')

// ----------------------------------------------------------------------------------------------------------------
const passport = require('./passport')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/authentication', usersRouter);
app.use(passport.initialize());
// ----------------------------------------------------------------------------------------------------------------


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
// app.use('/upload', router);

// ----------------------------------------------------------------------------------------------------------------



// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/propmanagedb", {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.log(err));
// Connect to the Mongo DB
console.log(process.env.MONGODB_URI)
console.log("-------------------------")
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/propmanagedb", {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log("Mongo connected")
  // console.log("ENV")
  // console.log(process.env.MONGODB_URI)
}).catch(err => console.log(err));

    
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys.js').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true})
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello Jude"));

const port = process.env.PORT || 5000;
//this means either you will run using the heroku (which uses process.env.PORT) or 
//we use localhost:5000

app.listen(port, ()=> console.log(`Server is running on port ${port}`));
//app listens for the port, and when it is successful (which is why it takes in empty argument, nothing is really returned from the success)
//it will run 'server is running on port 5000'(in our case)



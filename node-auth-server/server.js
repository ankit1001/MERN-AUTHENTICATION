const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");

const app = express();

//Using body parser middleware
app.use(bodyParser.urlencoded({
    extended : false
}));

app.use(bodyParser.json);


//configuring database (mongo DB)
const db = require("./config/dbCreds.js").mongoURI;

//connecting mongo DB
mongoose.connect(db, { useNewUrlParser:true })
.then(() => console.log("connection to DB is successful"))
.catch(err => console.log(err));


// Passport middleware
app.use(passport.initialize());

// Passport confi
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);


//settingup server port
const port = process.env.PORT || 4000;

//listen server on port
app.listen(port, () => console.log(`Auth server is up and running on port ${port} `));


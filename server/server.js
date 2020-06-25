const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
var cors = require('cors');
const User = require('./models/user');
const routes = require('./routes/route.js');
require('./db.js');

require("dotenv").config({
    path: path.join(__dirname, "a.env")
});

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
// const PORT=5000;

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(async(req, res, next) => {
    if (req.headers["x-access-token"]) {
        const accessToken = req.headers["x-access-token"];
        const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
        // Check if token has expired
        if (exp < Date.now().valueOf() / 1000) {
            return res.status(401).json({ error: "JWT token has expired, please login to obtain a new one" });
        }
        res.locals.loggedInUser = await User.findById(userId);
        next();
    } else {
        next();
    }
});

// var allowCrossDomain = function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', "*");
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// }

// app.use(allowCrossDomain)



app.use('/', routes);
app.listen(PORT, () => {
    console.log('Server is listening on Port:', PORT);
})
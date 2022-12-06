//DEPENDENCIES
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const serverless = require('serverless-http');
const defineCurrentUser = require('./middleware/defineCurrentUser')


//CONFIGURATION
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
        () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)
// Express Settings
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(defineCurrentUser)


//routes
app.get('/', (req, res) => res.send("Hello World"));
app.use('/user', require('./routes/userRoutes'));
app.use('/blog', require('./routes/blogRoutes'));


const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports.handler = serverless(app);
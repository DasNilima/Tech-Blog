//DEPENDENCIES
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const defineCurrentUser = require('./middleware/defineCurrentUser')


//CONFIGURATION
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
        () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// Express Settings
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(defineCurrentUser)


//routes
app.use('/', require('./routes/authRoutes'));
// app.use('/', require('./routes/userRoutes'));
app.use('/', require('./routes/blogRoutes'));
app.use('/', require('./routes/fileRoutes'));
app.use('/', require('./routes/commentRoutes'));



const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


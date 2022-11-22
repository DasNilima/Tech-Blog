//DEPENDENCIES
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
// import cors from 'cors';
import Router from './routes/route.js';



//CONFIGURATION
dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
        () => { console.log('connected to mongo: ', process.env.MONGO_URI)}
)


//routes
app.get('/', (req, res) => res.send("Hello World"));
app.use('/', Router);


const PORT = process.env.PORT || 8081

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
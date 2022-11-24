//DEPENDENCIES
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from "./routes/route.js";


//CONFIGURATION
dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());
// use mongoose to connect this app to our database on mongoDB using the MONGO_URL (connection string)
mongoose
        .connect(
                process.env.MONGO_URI,
                {       // these are options to ensure that the connection is done properly
                        useNewUrlParser: true,
                        useUnifiedTopology: true
                },() => { console.log('connected to mongo: ', process.env.MONGO_URI)})


//routes
app.get('/', (req, res) => res.send("Hello World"));
app.use('/', router);



const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
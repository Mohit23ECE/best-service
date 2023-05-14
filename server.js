import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from "./routes/authRoute.js";
import serviceRoutes from "./routes/serviceRoute.js";

import cors from 'cors';
import path from "path";
import {fileURLToPath} from 'url';

//configure env
dotenv.config()

//connection mongodb
connectDB();

//esmodule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//rest  object
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/service', serviceRoutes)

//rest api
app.use('*', function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})
// app.get('/', (req, res) => {
//     res.send({
//         message:'ecommerce app started'
//     })
// })

//PORT
// const PORT = 8080
const PORT = process.env.PORT || 8080



//run listen
app.listen(PORT, () => {
    console.log(`server Running`)
});
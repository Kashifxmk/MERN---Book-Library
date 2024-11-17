import express  from "express";
import {PORT,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from'./models/bookModels.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app= express();

app.use(express.json());

//middleware for CORS

//op1:allow origin with default of cors
app.use(cors());
//op2:allow origin with specific domains
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods:['GET','POST','DELETE','PUT'],
//         allowedHeaders:['Content-Type'],
//     })
// );

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to MERN Stack')
});

app.use('/books',booksRoute);


mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('App connected to MongoDB');
        app.listen(PORT,() => {
            console.log(`App listening on port ${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    });


import express from 'express';
import mongoose from 'mongoose';
import Cards from './cards.js';
import cors from 'cors';

//App config
const app = express();
const port = process.env.PORT || 8001;

const mongodbPassword = 'iLi09T5vedCmltuq';
const connectionUrl = `mongodb+srv://admin:${mongodbPassword}@cluster0.m3n3h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

//Middlewares
app.use(express.json())

const corsOptions = {
    methods: ['POST', 'GET', 'PATCH', 'DELETE']
}

app.use(cors(corsOptions))

//DB Config
mongoose.connect(connectionUrl)

//API Endpoints
app.get("/", (req, res) => {
    res.status(200).send("SA")})

app.post('/cards', (req, res) => {
    const dbCards = req.body;
    Cards.create(dbCards, (err, data) => {
        if (err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

//Listener
app.listen(port, ()=> {
    console.log(`Server started on ${port}`);
})
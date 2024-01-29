//Khai báo module express đẻ tạo web server
import express, { json } from "express";
import * as dotenv from "dotenv";
import {productsRouter} from './routes/index.js';
import connectDB from "./database/database.js";

import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();
app.use(json()); // add middleware de ung dung Express lam viec voi json
app.use(bodyParser.json());
//connect to frontend
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.get('/', (req, res) => {
console.log(req.headers);
res.send("Welcome to NodeJS");
});
app.use('/products',productsRouter);

const port = process.env.PORT || 8080;

app.listen(port, async () => {
    connectDB()
    console.log(`Server running on: http://localhost:${port}`);
})





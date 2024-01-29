import express from "express"

const app = express();

app.get('/', (req, res)=>{
    console.log(req.headers);
    res.send("Welcome to Node JS")
})
const port = 8080;
app.listen(port, async() =>{
    console.log(`Server running on port: http://localhost:${port}`);
})

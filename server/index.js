const express = require("express");
const cors = require("cors");

const {getCompliment, getFortune, createDessert, updateDessert, deleteDessert} = require('./controller')

const app = express();


app.use(express.json()); // When we want to be able to accept JSON.
app.use(cors());



app.get('/api/compliment', getCompliment);
app.get('/api/fortune', getFortune);
// app.post('/api/dessert', createDessert);
// app.delete('/api/dessert/:id', deleteDessert)
// app.put('/api/dessert/:id', updateDessert)

app.listen(4000, () => console.log("Server running on 4000"));

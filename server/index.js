const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const {getCompliment, getFortune, addGoal, changeStatus, deleteGoal} = require('./controller')


app.get("/api/compliment", getCompliment);
app.get('/fortune', getFortune)
app.post('/goal', addGoal)
app.put('/progress', changeStatus)
app.delete('/delete', deleteGoal)


app.listen(4000, () => console.log("Server running on 4000"));

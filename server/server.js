const express = require('express')
const bodyParser = require('body-parser')
const { Client } = require('pg')
const app = express()
const newConnection = require('./dbConnect.js')
const cors = require('cors')

var numTasks = 0;

var client = new Client(newConnection.newCon());
client.connect()

app.use(cors({
	origin: '*'
}))
app.use(bodyParser.urlencoded({extended: false}))

app.listen(3000, () => {
    console.log("Listening on Port 3000")
})

async function getTasks() {
    let tasks = await client.query('SELECT * FROM "ToDo"')
    return tasks.rows;
}

app.get('/api/tasks', async (req, res) => {
    let myTasks = await getTasks();
    numTasks = myTasks.length;
    console.log('request is received')
    console.log("Number of Tasks from GET: " + numTasks)
    res.send(myTasks)
})

app.delete('/api/delete/:id', async (req, res) => {
    console.log("request received")
   await client.query('DELETE FROM "ToDo" WHERE "ID"= $1', [req.params.id])
   numTasks--;
   console.log("After Delete " + numTasks)
})

app.post('/api/add', async (req, res) => {
    console.log("Received");
    let impl = parseInt(req.body.Implementation, 10);
    let impa = parseInt(req.body.Impact, 10);
    console.log("Before Post: " + numTasks);
    await client.query(`INSERT INTO "ToDo" ("TaskName", "DueDate", "Implementation", "Impact", "ID") VALUES ('${req.body.Task_Name}','${req.body.Due_Date}', ${impl}, ${impa}, ${numTasks++})`)
    console.log("After Post: " + numTasks)
    res.redirect('http://localhost:8080')
})

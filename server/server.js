const express = require('express')
const { Client } = require('pg')
const app = express()
const newConnection = require('./dbConnect.js')

var client = new Client(newConnection.newCon())

app.listen(3000, () => {
    console.log("Listening on Port 3000")
})

async function getTasks() {
    client.connect();
    let tasks = await client.query('SELECT * FROM "ToDo"')
    client.end();
    return tasks.rows;
}

app.get('/api', async (req, res) => {
    let myTasks = await getTasks();
    res.send(myTasks)
})

app.delete('/api/:name', async (req, res) => {
    client.connect()
    await client.query('DELETE FROM "ToDo" WHERE TaskName= $1', [req.params.TaskName])
    client.end();
    res.redirect('/')    
})

app.post('/api/add', async (req, res) => {
    client.connect()
    await client.query('INSERT INTO "ToDo" ("TaskName", "DueDate", "Implementation", "Impact") VALUES ($1, $2, $3, $4)', [req.params.TaskName, req.params.DueDate, req.params.Implementation, req.params.Impact])
    client.end();
    res.redirect('/')
})
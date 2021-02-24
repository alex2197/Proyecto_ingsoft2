const { Sequelize } = require('sequelize')
const express = require('express')
const app = express()
const port = 3000

const sequelize = new Sequelize('sqlite::memory')


app.post("/crearCliente",(req, res) => {
    console.log("Received a POST HTTP method")
})

app.post("/crearCita",(req, res) => {
    console.log("Received a POST HTTP method")
})

app.get("/ValidarSesion", (req, res) => {
    return res.send("Received a GET HTTP method")
})

app.get("/RevisarCita", (req, res) => {
    return res.send("Received a GET HTTP method")
})

app.put('/ActualizarCliente/:userId', (req, res) => {
    return res.send(
        `PUT HTTP Method on ActualizarCliente/`,
    )
})

app.put("/ActualizarCita", (req, res) => {
    return res.send("Received a PUT HTTP method")
})

app.delete("/BorrarCliente/:userId", (req, res) => {
    return res.send(
        `DELETE HTTP Method on BorrarCliente/`,
    )
})

app.delete("/CancelarCita", (req, res) => {
    return res.send("Received a DELETE HTTP method")
})

app.post("/crearComentario",(req, res) => {
    return res.send("Received a POST HTTP method")
})

app.delete("/BorrarComentario", (req, res) => {
    return res.send("Received a DELETE HTTP method")
})

app.get("/VerComentario", (req, res) => {
    return res.send("Received a GET HTTP method")
})



app.listen(port, () => {
    console.log(`Example app at http://localhost:${port}`)
})
const sequelize = require('./database/db');
const express = require('express')
const User = require('./database/models/Clientes');
var bodyParser = require('body-parser')
const app = express()
const port = 3000


const routerClientes = require('./routes/clientes')
const routerCatalogoCitas = require('./routes/CatalogoCitas')
const routerContacto = require('./routes/Contacto')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.set('view engine', 'ejs')
app.use("/views/styles", express.static(__dirname + "/views/styles"));

app.get('/', (req, res) => {
    res.render('index')
})

app.use('/clientes', routerClientes)
app.use('/CatalogoCitas', routerCatalogoCitas)
app.use('/Contacto', routerContacto)


app.listen(port, () => {
    console.log(`Example app at http://localhost:${port}`)

    //Conectarse a la base de datos
    sequelize.sync({ force: false }).then(() => {
        console.log("Nos hemos podido conectar a la base de datos");
    }).catch(error => {
        console.log("Se ha producido un error", error);
    })
})



/*app.post("/crearCliente",(req, res) => {
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
        `PUT HTTP Method on ActualizarCliente/${req.params.userId}`,
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
})*/
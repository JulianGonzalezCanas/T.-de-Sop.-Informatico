const express = require('express')
const app = express()
const port = 3004
const path=require("path");
app.use(express.static(path.join(__dirname, 'index')));
const bodyParser = require("body-parser");
var mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/formulario', (req, res) => {
  console.log(req.body);
  var mysql = require('mysql');
  console.log("hola");
  var conexion= mysql.createConnection({
    host : 'localhost',
    database : 'node',
    user : 'alumno',
    password : 'alumnoipm',
});

console.log("hola2");
  conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
  });
  
  const{validationTooltip01,validationTooltip02}= req.body;
  console.log("hola3");
  const sql = `insert into Usuario values(null,"${validationTooltip01}","${validationTooltip02}");`;

  conexion.query(sql, function (err, result) {
    if (err) {
      console.error('Error al guardar los datos: ', err);
      res.status(500).json({ error: 'Error al guardar los datos' });
      return;
    }
    res.status(200).json({ message: 'Datos guardados en la base de datos' });
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
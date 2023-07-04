const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'alumno',
  password: 'alumnoipm',
  database: 'mydb'
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/formulario', (req, res) => {
  
  const sql = 'INSERT INTO users (id, username, password) VALUES (null, "${req.body.nombre}", "${req.body.password}")';
  const values = [req.body.username, req.body.password];

  connection.query(sql, values, (error, result) => {
    if (error) {
      console.error('Error al guardar el formulario:', error);
      res.status(500).send('Error al guardar el formulario');
    } else {
      res.send('Formulario enviado correctamente');
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
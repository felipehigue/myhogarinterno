const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mysql = require('mysql2');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Configuración de base de datos
const db = mysql.createConnection({
  host: 'mysql.railway.internal',
  user: 'root',
  password: 'BCvMLUvtRlpWehkRhebIXYoQJWgPSQnQ',
  database: 'railway',
});

// Middleware
app.use(express.json());

// Ruta para guardar información
app.post('/update', (req, res) => {
  const { buttonId, text } = req.body;
  db.query(
    'UPDATE botones SET texto = ? WHERE id = ?',
    [text, buttonId],
    (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error al actualizar' });
      }
      io.emit('update-button', { buttonId, text }); // Notifica a los clientes
      res.status(200).json({ message: 'Actualizado' });
    }
  );
});

// Ruta para obtener información de los botones
app.get('/buttons', (req, res) => {
  db.query('SELECT * FROM botones', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener botones' });
    }
    res.json(results);
  });
});

// WebSocket
io.on('connection', (socket) => {
  console.log('Cliente conectado');
});

server.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));

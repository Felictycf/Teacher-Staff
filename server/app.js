const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: '101.43.166.116',
  user: 'root',
  password: 'hujian',
  database: 'facutl_database'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});

app.get('/prod-api/staff', (req, res) => {
  const sql = 'SELECT * FROM Staff';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get('/prod-api/staff/:id', (req, res) => {
  const sql = 'SELECT * FROM Staff WHERE id = ?';
  db.query(sql, [req.params.id], (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get('/prod-api/research/:staff_id', (req, res) => {
  const sql = 'SELECT * FROM Research WHERE staff_id = ?';
  db.query(sql, [req.params.staff_id], (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get('/prod-api/articles/:staff_id', (req, res) => {
  const sql = 'SELECT * FROM Articles WHERE staff_id = ?';
  db.query(sql, [req.params.staff_id], (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
app.put('/prod-api/staff/:id', (req, res) => {
  const sql = 'UPDATE Staff SET name = ?, title = ? WHERE id = ?';
  const data = [req.body.name, req.body.title, req.params.id];
  db.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

import express from 'express';
import path from 'path';
import mysql from 'mysql';

import formatDate from '../helpers/formatDate.js';

const PORT = process.env.PORT || 3001;
const __dirname = path.resolve();
const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

// function formatDate(unformattedDate) {
//   const dateTime = new Date(unformattedDate);
//   const year = dateTime.getFullYear();
//   const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
//   const day = dateTime.getDate().toString().padStart(2, '0');

//   return `${year}-${month}-${day}`;
// }

app.get('/', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'build', 'index.html')),
);

app.post('/api/add-cost', async (req, res) => {
  try {
    const { category, cost, date } = req.body;
    console.log('### category in Server', category);
    console.log('### cost in Server', cost);
    console.log('### date in Server', date);

    const formattedDate = formatDate(date);

    // const dateTime = new Date(date);
    // const year = dateTime.getFullYear();
    // const month = dateTime.getMonth() + 1;
    // const day = dateTime.getDate();
    // const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day
    //   .toString()
    //   .padStart(2, '0')}`;

    const conn = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'cost-calc',
    });

    conn.connect(error => {
      if (error) {
        console.log("### error in app.post('/api/add-cost'!", error);
      } else {
        console.log('###DATABASE ------ CONNECTION IS SUCСESSFUL');
      }
    });

    const sql = `INSERT INTO costs (category, cost, date) VALUES (?, ?, ?)`;
    conn.query(sql, [category, cost, formattedDate], (error, results) => {
      if (error) {
        console.error('### Помилка під час виконання SQL запиту:', error);
      } else {
        console.log('### Дані були успішно записані в базу даних:', results);
      }
    });

    conn.end(error => {
      if (error) {
        console.log('### error on Server!', error);
      } else {
        console.log('### DATABASE ------ CLOSE');
      }
    });
  } catch (error) {
    console.log('### err in Server', error);
  }
});

app.post('/api/get-cost-period', async (req, res) => {
  try {
    const { dateFrom, dateTo } = req.body;
    console.log('### req in Server', req);
    console.log('### res in Server', res);

    console.log('### dateFrom in Server', dateFrom);
    console.log('### dateTo in Server', dateTo);

    const formattedDateFrom = formatDate(dateFrom);
    const formattedDateTo = formatDate(dateTo);

    console.log('### formattedDateFrom in Server', formattedDateFrom);
    console.log('### formattedDateTo in Server', formattedDateTo);

    const conn = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'cost-calc',
    });

    conn.connect(error => {
      if (error) {
        console.log("### error in app.post('/api/get-cost-period'!", error);
      } else {
        console.log('###DATABASE ------ CONNECTION IS SUCСESSFUL');
      }
    });

    const sql = `SELECT * FROM costs WHERE date >= ? AND date <= ?`;
    conn.query(sql, [formattedDateFrom, formattedDateTo], (error, results) => {
      if (error) {
        console.error('### Помилка під час виконання SQL запиту:', error);
      } else {
        console.log('### Дані були успішно ОТРИМАНІ ІЗ БАЗИ ДАНИХ:', results);
      }
      res.json(results);
    });

    conn.end(error => {
      if (error) {
        console.log('### error on Server!', error);
      } else {
        console.log('### DATABASE ------ CLOSE');
      }
    });
  } catch (error) {
    console.log('### err in Server', error);
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log('### email in Server', email);
    console.log('### password in Server', password);

    const conn = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'cost-calc',
    });

    conn.connect(error => {
      if (error) {
        console.log("### error in app.post('/api/login!", error);
      } else {
        console.log('###DATABASE ------ CONNECTION IS SUCСESSFUL');
      }
    });

    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;

    conn.query(sql, [email, password], (error, results) => {
      if (error) {
        console.error('### Помилка під час виконання SQL запиту:', error);
      } else {
        console.log('### Дані були успішно ОТРИМАНІ ІЗ БАЗИ ДАНИХ:', results);
      }
      res.json(results);
    });

    conn.end(error => {
      if (error) {
        console.log('### error on Server!', error);
      } else {
        console.log('### DATABASE ------ CLOSE');
      }
    });
  } catch (error) {
    console.log('### err in Server', error);
  }
});

app.listen(PORT, () => {
  console.log(`### Сервер запущено на порті ${PORT} `);
});

import express from 'express';
import path from 'path';
import cors from 'cors';
import { Role } from '../helpers/enum.js';

import { createDbConnection, closeDbConnection } from './dbConnect.js';
import formatDate from '../helpers/formatDate.js';

const PORT = process.env.PORT || 3001;
const __dirname = path.resolve();
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.listen(PORT, () => {
  console.log(`### Сервер запущено на порті ${PORT} `);
});

app.get('/', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'build', 'index.html')),
);

app.post('/api/add-cost', async (req, res) => {
  try {
    const { category, cost, date } = req.body;

    const formattedDate = formatDate(date);

    const conn = createDbConnection();

    const sql = `INSERT INTO costs (category, cost, date) VALUES (?, ?, ?)`;
    conn.query(sql, [category, cost, formattedDate], (error, results) => {
      if (error) {
        console.error('### Помилка під час виконання SQL запиту:', error);
      } else {
        console.log('### Дані були успішно записані в базу даних:', results);
      }
    });

    closeDbConnection(conn);
  } catch (error) {
    console.log('### err in Server', error);
  }
});

app.post('/api/get-cost-period', async (req, res) => {
  try {
    const { dateFrom, dateTo } = req.body;

    const formattedDateFrom = formatDate(dateFrom);
    const formattedDateTo = formatDate(dateTo);

    const conn = createDbConnection();

    const sql = `SELECT * FROM costs WHERE date >= ? AND date <= ?`;
    conn.query(sql, [formattedDateFrom, formattedDateTo], (error, results) => {
      if (error) {
        console.error('### Помилка під час виконання SQL запиту:', error);
      } else {
        console.log('### Дані були успішно ОТРИМАНІ ІЗ БАЗИ ДАНИХ:', results);
      }
      res.json(results);
    });

    closeDbConnection(conn);
  } catch (error) {
    console.log('### err in Server', error);
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const conn = createDbConnection();

    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;

    conn.query(sql, [email, password], (error, results) => {
      if (error) {
        console.error('### Помилка під час виконання SQL запиту:', error);
      } else {
        console.log('### Дані були успішно ОТРИМАНІ ІЗ БАЗИ ДАНИХ:', results);
      }
      res.json(results);
    });

    closeDbConnection(conn);
  } catch (error) {
    console.log('### err in Server', error);
  }
});

app.post('/api/get-admin', async (req, res) => {
  try {
    const conn = createDbConnection();

    const sql = `SELECT * FROM users WHERE role = ?`;
    conn.query(sql, Role.ADMIN, (error, results) => {
      if (error) {
        console.error('### Помилка під час виконання SQL запиту:', error);
      } else {
        console.log('### Дані були успішно ОТРИМАНІ ІЗ БАЗИ ДАНИХ:', results);
      }
      res.json(results);
    });

    closeDbConnection(conn);
  } catch (error) {
    console.log('### err in Server', error);
  }
});

app.post('/api/registration-admin', async (req, res) => {
  try {
    const { email, password } = req.body;

    const conn = createDbConnection();

    const sql = `INSERT INTO users (email, password, role) VALUES (?, ?, ?)`;
    conn.query(sql, [email, password, Role.ADMIN], (error, results) => {
      if (error) {
        console.error('### Помилка під час виконання SQL запиту:', error);
      } else {
        console.log('### Дані були успішно записані в базу даних:', results);
      }
      res.json(results);
    });

    closeDbConnection(conn);
  } catch (error) {
    console.log('### err in Server', error);
  }
});

app.post('/api/registration-user', async (req, res) => {
  try {
    const { email, password, role } = req.body;
    console.log('### req.body', req.body);
    const conn = createDbConnection();

    const sql = `INSERT INTO users (email, password, role) VALUES (?, ?, ?)`;
    conn.query(sql, [email, password, role], (error, results) => {
      if (error) {
        console.error('### Помилка під час виконання SQL запиту:', error);
      } else {
        console.log('### Дані були успішно записані в базу даних:', results);
      }
      res.json(results);
    });

    closeDbConnection(conn);
  } catch (error) {
    console.log('### err in Server', error);
  }
});

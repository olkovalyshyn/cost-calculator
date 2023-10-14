import express from 'express';
import path from 'path';
import mysql from 'mysql';

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();
const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'build', 'index.html')),
);

app.post('/api/add-cost', async (req, res) => {
  try {
    const { category, cost, date } = req.body;
    console.log('### category in Server', category);
    console.log('### cost in Server', cost);
    console.log('### date in Server', date);

    const dateTime = new Date(date);
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1;
    const day = dateTime.getDate();
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day
      .toString()
      .padStart(2, '0')}`;

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

app.listen(PORT, () => {
  console.log(`### Сервер запущено на порті ${PORT} `);
});

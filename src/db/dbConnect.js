import mysql from 'mysql';

export function createDbConnection() {
  const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cost-calc',
  });

  conn.connect(error => {
    if (error) {
      console.log('### Database connection error:', error);
    } else {
      console.log('### Database connection established successfully');
    }
  });

  return conn;
}

export function closeDbConnection(conn) {
  conn.end(error => {
    if (error) {
      console.log('### Database connection close error:', error);
    } else {
      console.log('### Database connection closed');
    }
  });
}

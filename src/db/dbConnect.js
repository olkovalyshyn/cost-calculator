import mysql from 'mysql';

//for localhost
export function createDbConnection() {
  const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cost-calc',
  });

  //for hosting infinityfree.com
  // export function createDbConnection() {
  //   const conn = mysql.createConnection({
  //     host: 'sql209.infinityfree.com',
  //     user: 'if0_35452919',
  //     password: 'ZcDXhtObZ7jr',
  //     database: 'if0_35452919_cost_calc',
  //   });

  //for hosting 000webhost.com
  // export function createDbConnection() {
  //   const conn = mysql.createConnection({
  //     host: 'localhost',
  //     user: 'id21564363_root',
  //     password: "Gslghb'vcndj1",
  //     database: 'id21564363_board',
  //   });

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

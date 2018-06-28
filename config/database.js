//trong model -> database.js gọi ra để tạo kết nối đến mysql
// const DB_NAME = 'sql3245063';
// const DB_USER = 'sql3245063';
// const DB_PASSWORD = 'R7xl83MicI';
// const DB_HOST = 'sql3.freemysqlhosting.net';

const DB_NAME = 'laptop_db';
const DB_USER = 'root';
const DB_PASSWORD = 'root';
const DB_HOST = '127.0.0.1';
module.exports = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: 3306,
  database: DB_NAME,
  facebook_api_key: "2042177529365417",
  facebook_api_secret: "c4660eb73e207a88a95cd843714a9101",
  callback_url : "http://localhost:8080/auth/facebook/callback",
}


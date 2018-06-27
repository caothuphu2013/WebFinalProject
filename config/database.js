//trong model -> database.js gọi ra để tạo kết nối đến mysql
module.exports = {
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'laptop_db',
  facebook_api_key: "2042177529365417",
  facebook_api_secret: "c4660eb73e207a88a95cd843714a9101",
  callback_url : "http://localhost:8080/auth/facebook/callback",
}


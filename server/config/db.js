const mongoose = require("mongoose");
const DB_CONNECT = async () => {
  const URL = process.env.MONGO_URL;
  const result = await mongoose.connect(URL);
  console.log(result.connection.db.databaseName);
};
module.exports = DB_CONNECT;

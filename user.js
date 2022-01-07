const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "WPT_exam",
};

const addMessage = async (msg) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `insert into messages(message) values (?)`;
  await connection.queryAsync(sql, [msg.message]);
  console.log("success");
  await connection.endAsync();
};

const abc = {
  message: "Hello, how are you",
};

const xyz = {
  message: "I am Nitesh",
};

const getMessage = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `select * from Messages`;
  const list = await connection.queryAsync(sql, []);
  console.log(list);
  await connection.endAsync();
  return list;
};

//addMessage(abc);
//addMessage(xyz);
//getMessage();

module.exports = { addMessage, getMessage };

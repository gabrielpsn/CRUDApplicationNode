const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'secret',
  database: 'learners'
})

connection.connect(function(err){
  if(err) return console.log(err);
  console.log('conectou!');
  createTable(connection);
})

function createTable(conn){

  const sql = "CREATE TABLE IF NOT EXISTS learnerdetails (\n"+
    "learner_id int NOT NULL AUTO_INCREMENT,\n"+
    "learner_name varchar(150) NOT NULL,\n"+
    "learner_email char(150) NOT NULL,\n"+
    "course_Id int NOT NULL, \n"+
    "PRIMARY KEY (learner_id)\n"+
    ");";

  conn.query(sql, function (error, results, fields){
    if(error) return console.log(error);
    console.log('criou a tabela!');
  });
}

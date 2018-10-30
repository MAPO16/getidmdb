const express = require('express');
const app = express();
const mysql      = require('mysql');


var connection = mysql.createConnection({
  host   : "localhost",
  user   : "servicio2",
  password : "servicio2.123",
  database : "empleado"
});

  connection.connect();

 
 app.get('/rest/empleado', function (req, res) {
   
   let task_id_empleados = req.query.id_empleados


    connection.query('select * from empleados where id_empleados=?', task_id_empleados, function (error, results, fields){
    if(error) throw error;
 return res.send({error: false, date: results[0], message: 'Todos list'});

});
});

app.listen(4040, function() {
    console.log('Si salio : 4040');
});

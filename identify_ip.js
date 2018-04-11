var http = require('http');
var express=require('express');
var csv=require('csv');
var bodyParser=require('body-parser');
var fs=require('fs');
var path=require('path');
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));
	app.set('port',process.env.PORT||5050);

		app.set('views',__dirname+'/views');
		app.use(express.static(__dirname+'/public'));

		app.set("view engine","ejs");
		var io= require('socket.io').listen(http);   //('http://localhost:5050);
                
		       io.sockets.on('connection',function(socket){
		       var socketId=socket.id});
		//var clientIP= socket.request.connection.remoteAddress});
			       io.sockets.on('connection',function(socket){
			var address=socket.handshake.address;

		         console.log('new cnnct from addr'+ address.address+':'+address.port)});
			       
//2.
var Employees = [];
var file1=path.normalize('d:/GitHub/node_mongo_csv/employees.csv');
var number_of_columns= 1;//initial value
var row_index_max=200;

var table_data= new(Array);



//3.
function Employee(eno, ename, sal) {
 
    this.EmpNo = eno;
    this.EmpName = ename;
    this.Salary = sal;
};
 
//4.
fs.readFile(file1, function (err, contents) {
  if (err) {return console.log(err) }
  var lines = contents.toString().split('\n')
  row_index_max = lines.length-1;//needed just for render the imported csv to table_dat on page
  function CreateArray(row_index_max) {
   for (var i=0;i<row_index_max+1;i++) {
      table_data[i] = []; }
      return table_data;}
var fields=[" ",""," "];
   for (var index = 0; index < lines.length-1; index++) {
    fields=lines[index].split(',');
    number_of_columns = fields.length;//needed just for render the imported csv to table_dat on page
    table_data[index]=fields; //lines[index];
    Employees.push(new Employee(lines[index])); }
    console.log(lines)
})
app.get('/', function(res, res) {
res.render('build_table.ejs',{table_data:table_data,number_of_columns:number_of_columns});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Application listening on port ' + app.get('port'));
}); 
console.log('Server Started listening on 5050');

const express =require("express");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');


require('dotenv').config();

const app= express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

//template engine
const handlebars = exphbs.create({ extname: '.hbs', });
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

//connection pool
const pool=mysql.createPool({
    connectionLimit: 100,
    host           : process.env.DB_HOST,
    user           : process.env.DB_USER,
    database       : process.env.DB_NAME
});

//connect to DB
pool.getConnection((err,connection) => {
    if(err) console.log("err");
    else console.log('Connect as ID ' + connection.threadId);
});
const routes= require('./server/routes/user');
app.use('/',routes);

app.listen(port, () => console.log(`listening to port ${port}`));
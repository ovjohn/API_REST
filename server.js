const express = require('express');  //Creando la variable express
const mysql = require('mysql'); //Creando la variable mysql
const myconn = require('express-myconnection')
const routes = require('./routes')

//CONFIGURACIONES***********************************************************
const app = express();

app.set('port', process.env.PORT || 9000);  //Declarando el puerto del servidor

const dbOptions = {
    host:'localhost',
    post: 3306,
    user: 'root',
    password: '123456',
    database: 'library'
}



//Middlewares *************************************************************
app.use(myconn(mysql,dbOptions,'single'))
app.use(express.json())



//LISTING SERVER*******************************************************************
app.listen(app.get('port'), ()=>{
    console.log('Server runnig on port', app.get('port'))
});


//ROUTERS  ******************************************************
app.get('/',(req,res)=>{
    res.send('Welcome to my API')
})

app.use('/api',routes)




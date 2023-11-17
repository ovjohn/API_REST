# API_REST
API REST con **Node.js, Express.js y  MySQL** que permite hacer **CRUD** (Create, Read, Update, Delete) a una **Base de Datos MySQL**

## Archivo server.js
Aquí se configura el servidor, *las SETTINGS iniciales, los MIDDLEWARS, las ROUTERS*. &nbsp;

En la variable **dbOptions** ->  se configura los valores de la **Base de Datos**
```
{
    host:'nombre del host',
    post: puerto,
    user: 'usuario de la base de datos',
    password: 'Clave de la base de datos,
    database: 'nombre de la base de datos'
}
```

## routes.js
Aquí se especifican las diferentes **rutas que contienen las querys** de la **Base de Datos MySQL**.
Las rutas maneja las **acciones de CRUD**.

## requets.https 
Aquí se crean y prueban **solicitudes HTTP** para probar la **API_REST**. &nbsp;

En IDE de programación, es necesario instalar una extensión de solicitudes HTTP/HTTPS como *REST client o POSTMAN* para, poder efectuar estas pruebas. 



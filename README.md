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
Estando adentro de la carpeta del proyecto ejecuté -> " **npm run dev** " , para ejecutar la aplicación. &nbsp;

En el Browser,  colocar en la URL -> **http://localhost:9000/**, para ver que se ejecutó con éxito la API. &nbsp;

Con la url -> **http://localhost:9000/api** , se puede ver los registro actuales de la base de datos. &nbsp;

## routes.js
Aquí se especifican las diferentes **rutas que contienen las querys** de la **Base de Datos MySQL**.
Las rutas maneja las **acciones de CRUD**.

## requets.https 
Aquí se crean y prueban **solicitudes HTTP** para probar la **API_REST**. &nbsp;

Para que la API realice las acción de *Actualizar o eliminar*, es necesario *pasar el parámetro del ID por la url*, ejemplo -> http://localhost:9000/api/8 , el **8** es el ID que se pasa por parámetro. &nbsp;

Nota: En el IDE de programación, es necesario instalar una extensión de solicitudes HTTP/HTTPS como *REST client o POSTMAN* para, poder efectuar estas pruebas. &nbsp;

## Creación de la Base de Datos MySQL
```
CREATE DATABASE `library` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;

CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `autor` varchar(100) NOT NULL,
  `edicion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
```






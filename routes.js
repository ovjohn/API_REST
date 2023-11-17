const express = require('express')
const routes = express.Router()

//Leer la informacion
routes.get('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM books',(err, rows)=>{
            
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

//Crear o subir informacion
routes.post('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        //console.log(req.body)
        conn.query('INSERT INTO books SET ?',[req.body],(err,rows)=>{
            if(err) return res.send(err)

            res.send('Book  successfully inserted')
        })
    })
})

//Borrar Informacion
routes.delete('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM books WHERE id = ?',[req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.send('Your book exclude')

        })
    })
})

//Actualizar datos
routes.put('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE books SET ? WHERE id = ?',[req.body,req.params.id],(err,rows)=>{
            if(err) return res.send(err)

            res.send('Update books')
        })
    })
})


module.exports = routes
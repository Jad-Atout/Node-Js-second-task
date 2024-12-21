import express from 'express';
import mysql from 'mysql2'
const app = express();
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
})

app.get('/users', (req, res) => {
  const sql = `Select * from users`;
  connection.execute(sql, (err, result) => {
      if(err){
          res.send(err)
      }else {
          return res.status(200).json(result);
      }
  })
})


app.post('/user', (req, res) => {
    const {name,email,password} = req.body
    const sql = `Insert into users (name,email,password) Values('${name}','${email}','${password}')`
    connection.execute(sql,(err,result)=>{
        if(err){
           return  res.json(err)
        }
    })
    return res.status(201).json({message:"success"})
})

app.put('/user',(req, res) => {
    const {id,name}= req.body;
    const sql = `Update users set name='${name}' where id='${id}'; `
    connection.execute(sql,(err,result)=>{
        if(result.affectedRows===0){
            return res.status(404).json({message:"user not found"})
        }
        return res.json({message:"success"})
    })
})
app.delete('/user',(req,res)=>{
    const {id} = req.body
    const sql = `Delete from users where id='${id}';`;
    connection.execute(sql,(err,result)=>{
        if(result.affectedRows===0){
            return res.status(400).json({message:"user not found"})
        }else {
            return res.json({message:"success"})
        }
    })
})

app.listen(3000);

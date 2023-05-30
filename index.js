const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    {id:1 , name: 'sabana' , email: 'sabana@gmail.com'},
    {id:2 , name: 'sabnur' , email: 'sabana@gmail.com'},
    {id:3 , name: 'sakila' , email: 'sabana@gmail.com'}
]


app.get('/' ,(req, res) =>{
    res.send("Users Managemenet Server is Running");
})

app.get('/users' , (req , res) =>{
    res.send(users);
})

app.listen(port , () =>{
    console.log(`Server is Running on PORT: ${port}`)
})
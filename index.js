const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json());



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

app.post('/users' , (req, res) =>{
    console.log(req.body)
    const newUsre = req.body;
    newUsre.id = users.length +1 ;
    users.push(newUsre);
    res.send(newUsre);
})

app.listen(port , () =>{
    console.log(`Server is Running on PORT: ${port}`)
})
const express = require('express')
const app = express()
const port = 5555
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
//const pkg = require('./package.json');

app.get('/', (req, res) => {
  res.send('Hello World! of get req');
})

app.post('/', (req, res) => {
    res.send('Hello World! of post req')
})

app.put('http://localhost:5555/user', (req, res) => {
    res.send('Got a PUT request at /user')
})

app.delete('http://localhost:5555/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
require('dotenv').config()
const express = require('express')
const app = express()
// const port = 4000;

app.get('/' , (req , res) => {
    res.send('hello word 2.0');
})

app.get('/twitter' , (req , res) => {
    res.send('hello tweet ');
})

const js = {
    'name' : 'he',
    'sex' : 'she',
    'age' : 'it'
}

app.get(('/json') , (req , res) =>{
    res.json(js);
})

app.listen( process.env.PORT , () => {
    console.log(`runnig at ${process.env.PORT}`);
})
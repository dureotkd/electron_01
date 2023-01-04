const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http')
const robot = require('robotjs')

const server = http.createServer(app);


app.use(cors({
    origin : '*'
}))

server.listen(4000, () => {
    console.log('Node server Start');
})

app.get('/' ,async  (req,res) => {

    await 기다려(2000);

    robot.typeString('zz');

    res.send('/')


})



const 기다려 = (sec) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, sec);
    });
  };
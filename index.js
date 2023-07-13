const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.post('/upload', function(req, res) {
    console.log(req.files.foo);
    if(req.files.foo) res.send("Got the File!")
    else res.send("No File :/")
  });
app.listen(process.env.PORT || 3000)
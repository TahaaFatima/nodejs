// For Routing
const express = require('express');
const fs      = require('fs')
const app     = express();
const port    = 3000;

// For file
app.get('/create', function (req, res) {

  const content = 'Some content!'

  fs.writeFile('test.txt', content, err => {
    if (err) {
      console.error(err)
      return
    }

    res.send('File Created');
  })

});

app.get('/append', function (req, res) {

  const content = 'Some content!!!!'
  // const data = req.query.data;

  fs.appendFile('test.txt', content, err => {
    if (err) {
      console.error(err)
      return
    }
    
    res.send('File Appended');
  })
  
});

app.listen(3000);
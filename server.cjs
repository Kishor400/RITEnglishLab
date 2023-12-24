// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Define a route to handle the JSON file creation
app.post('/write-json', (req, res) => {
  const data = req.body.data;
  const type= req.body.type;
  var filePath="";
  if(type==1){
    filePath = path.join(__dirname, '/src/assets/markData.json');
  }else{
    filePath = path.join(__dirname, '/src/assets/Log.json');
  }
  

  // Write the JSON data to a file
  fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error('Error writing JSON file:', err);
      return res.status(500).send('Internal Server Error');
    }
    console.log('JSON file written successfully! in '+type);
    res.status(200).send('JSON file written successfully!');
  });
});

// Serve static files from the Vite build output
app.use(express.static(path.join(__dirname, 'dist')));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

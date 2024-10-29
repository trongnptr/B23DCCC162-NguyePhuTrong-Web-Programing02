const express = require('express');
const app = express();
const port = 3003;
  
app.put('/students', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 },
    { id: 3, name: 'Mark Johnson', age: 21 }
  ]);
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

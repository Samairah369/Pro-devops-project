const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.send({ 
    status: 'success', 
    message: '🔥 Hello Salman! Your Enterprise Backend API is Fully Functional.' 
  });
});

app.listen(5000, () => console.log('Backend running on port 5000'));
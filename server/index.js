const express = require('express');
const app = express();
const cors = require('cors');
  
app.use(express.json());
app.use(cors());

const db = require('./models');


// Import routes
const postsRoutes = require('./routes/Posts');
app.use('/posts', postsRoutes);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });

});

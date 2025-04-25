const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./routes/products');

dotenv.config();
const app = express();

app.use(express.json());

// API routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

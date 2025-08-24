require('dotenv').config();
const express = require('express');
const cors = require('cors');  
const authRoutes = require('./routes/auth');

const app = express();
const port = process.env.PORT || 3000;

// Autorise les requêtes venant de ton front Angular
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization']
}));


app.use(express.json());

// Routes
debugger;
app.use('/api/auth', authRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);

});

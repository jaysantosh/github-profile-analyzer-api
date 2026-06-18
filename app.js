require("dotenv").config()

const express = require('express');
const cors = require('cors');
const profileRoutes = require('./routes/profileRoutes');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', profileRoutes);

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {

    res.render('index');

});

app.listen(process.env.PORT, () => {
  console.log("🚀 Server running on port"+process.env.PORT);
});
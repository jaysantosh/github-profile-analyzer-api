require("dotenv").config()

const express = require('express');
const cors = require('cors');
const profileRoutes = require('./routes/profileRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', profileRoutes);


app.get("/", (req, resp)=>{
    resp.send("Hello");
})

app.listen(process.env.PORT, () => {
  console.log("🚀 Server running on port 3000");
});
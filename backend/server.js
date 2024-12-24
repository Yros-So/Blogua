const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send('Server is running...');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port: ${port}`));

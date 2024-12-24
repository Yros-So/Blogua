const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const conn = process.env.DB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(conn);
        console.log('Database is connected...');
    } catch (error) {
        console.error('Error: ' + error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
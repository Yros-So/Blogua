import mongoose from "mongoose"

var con = process.env.DB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://Yros_So0130:mRtCeAn2F6PYWQUX@cluster0.uut5s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database is connected...');
    } catch (error) {
        console.error('Error: ' + error.message);
        process.exit(1);
    }
};
import mongo from 'mongoose';

const connectDB = async () =>{
    try {
        mongo.createConnection("mongodb://localhost:27017/dbnosql-mongo", {
        serverSelectionTimeoutMS: 30000
        });
        console.log("Sucess connecting to MongoDB");
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error.message);
    }
};

export default connectDB;
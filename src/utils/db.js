// import mongoose from 'mongoose';

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI);
//         console.log('MongoDB connected successfully');
//     } catch (error) {
//         console.error('MongoDB connection failed:', error);
//         throw new Error('Database connection failed');
//     }
// }

// export default connectDB;

import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        throw new Error('Database connection failed');
    }
};

export default connect;
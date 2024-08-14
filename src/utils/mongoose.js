const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL)

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
})

mongoose.connection.on('error', (err) => {
    console.log(`MongoDB connection error: ${err}`);
})

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
})
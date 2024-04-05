let isConnected = false;
const mongoose = require('mongoose');

export const connectToDB = async () => {
  const mongoURL = 'mongodb://localhost:27017/';

  if (isConnected) {
    console.log("MongoDB connection already established");
    return;
  }

  try {
    await mongoose.connect(mongoURL);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
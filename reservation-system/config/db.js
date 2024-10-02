const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://BhavySoni0872:9714781792%40Bs@bhavy0872.1wu08.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = connectDB;

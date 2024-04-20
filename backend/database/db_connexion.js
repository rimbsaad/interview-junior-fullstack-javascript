
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://rimbensaad11:QzqL8uJSE1jqFM3s@citiesdb.jsox9vh.mongodb.net/?retryWrites=true&w=majority&appName=CitiesDb'
     );
    console.log("Connected to MongoDB Atlas!");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
    process.exit(1); 
};
}
module.exports = connectDB;
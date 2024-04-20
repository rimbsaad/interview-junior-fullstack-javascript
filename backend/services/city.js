const City = require("../models/city");

async function getCityF(cityName) {
  try {
    const city = await City.findOne({ name: cityName }).lean();
    return city;
  } catch (error) {
    console.error("Error getting city:", error);
    throw new Error("Error getting city");
  }
}
async function getCitiesF() {
  try {
    const cities = await City.find().lean();
    return cities;
  } catch (error) {
    console.error("Error getting cities:", error);
    throw new Error("Error getting cities");
  }
}
module.exports = { getCityF, getCitiesF };

const { getCityF, getCitiesF } = require("../services/city");
const City = require("../models/city");

async function getAllCities(req, res) {
  try {
    let query = {};
    const cityName = req.query.cityName;
    if (cityName) {
      query = { name: cityName };
    }
    const cities = await City.find(query).lean();
    res.json(cities);
  } catch (error) {
    console.error("Error getting cities:", error);
    res.status(500).json({ message: "Error getting cities" });
  }
}
const createCity = async (req, res) => {
  try {
    const { _id, ...cityData } = req.body;
    const newCity = await City.create(cityData);
    res.status(201).json({ message: "City created successfully", newCity });
  } catch (error) {
    console.error("Error creating city:", error);
    res.status(500).json({ message: "Error creating city" });
  }
};
async function updateCity(req, res) {
  try {
    const { _id, ...cityData } = req.body;
    const updatedCity = await City.findOneAndUpdate({ _id }, cityData, {
      new: true,
    });
    res.status(201).json({ message: "City updated successfully", updatedCity });
  } catch (error) {
    console.error("Error updating city:", error);
    res.status(500).json({ message: "Error updating city" });
    console.log(error);
  }
}

async function deleteCity(req, res) {
  try {
    const city_id = req.params._id;
    const deletedCity = await City.findOneAndDelete({ _id: city_id });
    if (!deletedCity) {
      res.status(404).json({ message: "City not found" });
    }
    console.log(deletedCity);
    res.json("City deleted successfully");
  } catch (error) {
    console.error("Error deleting city:", error);
    res.status(500).json({ message: "Error deleting city" });
  }
}

module.exports = { getAllCities, createCity, deleteCity, updateCity };

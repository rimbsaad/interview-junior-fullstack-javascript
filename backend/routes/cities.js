const express = require("express");
const router = express.Router();
const { getAllCities, createCity, deleteCity, updateCity } = require("../controllers/city");
const { checkCityName } = require("../middlewares/checkCityName"); 

router.get("/cities", checkCityName, getAllCities);
router.post("/cities", createCity); 
router.delete("/cities/:cityName",deleteCity); 
router.put("/cities", updateCity);



module.exports = router;

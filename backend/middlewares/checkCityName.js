function checkCityName(req, res, next) {
  const cityName = req.params.cityName;
  // if (!cityName) {
  //   return res.status(400).json({ message: "City name is required" });
  // }
  if (!/^[a-zA-Z]+$/.test(cityName)) {
    return res
      .status(400)
      .json({ message: "City name must contain only letters" });
  }
  if (!/^[a-zA-Z]{3,}$/.test(cityName)) {
    let errors = [];
    if (cityName.length < 3) {
      errors.push("City name must be at least 3 characters long");
    }
    if (!/^[a-zA-Z]+$/.test(cityName)) {
      errors.push("City name must contain only letters");
    }
    return res.status(400).json({ message: errors.join(", ") });
  }
  next();
}

module.exports = { checkCityName };

const express = require("express");
const userRoutes = require("./routes/cities");
const { connectDB } = require("./database/db_connexion");
const cors = require('cors');
 app.use(cors());
const app = express();
connectDB();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

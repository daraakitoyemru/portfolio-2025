const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;

const assetPath = path.join(__dirname, "assets");
const filenames = fs.readdirSync(assetPath);
filenames.forEach((file) => console.log(file));

app.use("/assets", express.static(assetPath));

app.get("/images", (req, res) => {
  res.json(filenames);
});

app.listen(PORT, () => {
  console.log(`Serve is listening on port: ` + PORT);
});

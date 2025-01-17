const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 8080;

const assetPath = path.join(__dirname, "assets");

app.use("/assets", express.static(assetPath));
app.use(cors({ origin: "https://your-frontend-domain.com" }));

app.get("/images", (req, res) => {
  fs.readdir(assetPath, (error, filename) => {
    if (error) {
      console.log(error);
    }
    res.json(filename);
  });
});

app.listen(PORT, () => {
  console.log(`Serve is listening on port: ` + PORT);
});

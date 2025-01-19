const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 8080;

const assetPath = path.join(__dirname, "assets");

app.use("/assets", express.static(assetPath));

app.use(
  cors({
    methods: "GET,POST,PATCH,DELETE,OPTIONS",
    optionsSuccessStatus: 200,
    origin: [
      "https://daraakitoyemru.github.io",
      "https://portfolio-2025-84q3.onrender.com",
    ],
  })
);

app.options("*", cors());

app.get("/images", (req, res) => {
  fs.readdir(assetPath, (error, filename) => {
    if (error) {
      res.status(500).json({ error: "Error reading directory" });
      return;
    }
    res.json(filename);
  });
});

app.listen(PORT, () => {
  console.log(`Serve is listening on port: ` + PORT);
});

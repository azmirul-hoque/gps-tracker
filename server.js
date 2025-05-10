const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

app.post("/location", (req, res) => {
  const { latitude, longitude } = req.body;
  console.log(
    `📍 Received location: Latitude=${latitude}, Longitude=${longitude}`
  );
  res.status(200).send("Location received");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

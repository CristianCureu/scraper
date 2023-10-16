const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { scrapeWebsite } = require("./scraper");

const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get("/scrape", async (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }
  try {
    const scrapedData = await scrapeWebsite(url);
    res.json(scrapedData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

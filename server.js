const express = require("express");
const app = express();

app.set("trust proxy", true); // IMPORTANT: lets us get real IP behind Render/Heroku/etc

app.get("/", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  console.log("Visitor IP:", ip);
  res.send(`Your IP is: ${ip}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));


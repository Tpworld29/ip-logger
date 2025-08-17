const express = require('express');
const fetch = require('node-fetch'); // make sure you did: npm install node-fetch
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const TOKEN = '21fdd509c94a23'; // your ipinfo.io token

app.get('/', async (req, res) => {
  // Get visitor IP (first in case of multiple IPs)
  const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress).split(',')[0];

  try {
    // Get location info from ipinfo.io
    const response = await fetch(`https://ipinfo.io/${ip}/json?token=${TOKEN}`);
    const data = await response.json();

    // Prepare log line
    const logLine = `Visitor IP: ${ip}, City: ${data.city}, Region: ${data.region}, Country: ${data.country}\n`;

    // Print in terminal
    console.log(logLine);

    // Optional: save to file
    fs.appendFileSync('logs/visits.log', logLine);

  } catch (err) {
    console.log('Error fetching location:', err);
  }

  res.send('IP and location logged!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express const fetch = require('node-fetch'); // npm install node-fetch
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const TOKEN = 'YOUR_TOKEN'; // replace with your ipinfo.io token

app.get('/', async (req, res) => {
  // Get visitor IP (first one if multiple)
  const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress).split(',')[0];

  // Get location info
  try {
    const response = await fetch(`https://ipinfo.io/${ip}/json?token=${TOKEN}`);
    const data = await response.json();

    // Log visitor IP + city + region + country
    const logLine = `Visitor IP: ${ip}, City: ${data.city}, Region: ${data.region}, Country: ${data.country}\n`;
    console.log(logLine);

    // Optional: save to file
    fs.appendFileSync('logs/visits.log', logLine);

  } catch (err) {
    console.log('Error fetching location:', err);
  }

  res.send('IP and location logged!');
});

app.listen(PORT, () const express = require('express');
const fetch = require('node-fetch'); // make sure you did: npm install node-fetch
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const TOKEN = '21fdd509c94a23'; // your ipinfo.io token

app.get('/', async (req, res) => {
  // Get visitor IP (first in case of multiple IPs)
  const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress).split(',')[0];

  try {
    // Get location info from ipinfo.io
    const response = await fetch(`https://ipinfo.io/${ip}/json?token=${TOKEN}`);
    const data = await response.json();

    // Prepare log line
    const logLine = `Visitor IP: ${ip}, City: ${data.city}, Region: ${data.region}, Country: ${data.country}\n`;

    // Print in terminal
    console.log(logLine);

    // Optional: save to file
    fs.appendFileSync('logs/visits.log', logLine);

  } catch (err) {
    console.log('Error fetching location:', err);
  }

  res.send('IP and location logged!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


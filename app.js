const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use EJS for templating
app.set('view engine', 'ejs');

// Middleware for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS/JS) from the 'public' directory
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
    res.render('index'); // This will look for an 'index.ejs' file
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.post('/calculate', (req, res) => {
    const name = req.body.name;
    const points = parseInt(req.body.points);
    const assists = parseInt(req.body.assists);
    const rebounds = parseInt(req.body.rebounds);

    // Calculate player efficiency
    const efficiency = (points + assists + rebounds) / 3;

    // Send back a response with the result (you can render a new EJS page)
    res.render('result', { name, efficiency });
});

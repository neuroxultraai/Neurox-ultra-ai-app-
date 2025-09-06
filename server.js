
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../'));

app.post('/api/ask', async (req, res) => {
    const query = req.body.query;
    // Here you would integrate your AI response logic (e.g. OpenAI API)
    res.json({ response: `You asked: "${query}". AI response will go here.` });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

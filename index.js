const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const places = require('./data/places.json')

app.get('/', (req, res) => {
	res.send('travel guru backend running');
});
app.get('/places', (req, res) => {
    res.send(places)
})

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});

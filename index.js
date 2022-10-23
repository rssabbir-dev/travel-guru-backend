const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
const places = require('./data/places.json');
const hotels = require('./data/hotels.json');

//
//
//
//
//Places API
app.get('/', (req, res) => {
	res.send('travel guru backend running');
});
app.get('/places', (req, res) => {
	res.send(places);
});
app.get('/places/:id', (req, res) => {
	const id = req.params.id;
	const place = places.find((place) => place.id == id);
	res.json(place);
});

//
//
//
//
//Hotel API
app.get('/hotels', (req, res) => {
    res.send(hotels);
})
//
//
//
//
//Listen Server
app.listen(port, () => {
	console.log(`server is running on ${port}`);
});

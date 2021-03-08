var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

const port = 8081;

var textapi = ({
	application_key: process.env.API_KEY
});

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})

app.post('/sentiment', function (req, res) {
    res.send(mockAPIResponse);
	//res.body = {message = BuildURL(req.body)};
})

function BuildURL(text) {
	let baseURL = "https://api.meaningcloud.com/sentiment-2.1?";
	let lang = "lang=en";
	let txt = `txt=${text}`;
	let key = `key=${process.env.API_KEY}`;
	return baseURL+lang+"&"+txt+"&"+key;
}
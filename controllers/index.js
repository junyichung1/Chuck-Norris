const request = require('request');

const randomJoke = 'https://api.chucknorris.io/jokes/random';

module.exports = {
    index
}

function index(req, res) {
    request(randomJoke, function(err, response, body) {
        const joke = JSON.parse(body);
        res.render('index', { joke: joke.value, icon: joke.icon_url })
    });
}
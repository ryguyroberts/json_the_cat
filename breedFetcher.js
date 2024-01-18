const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      return callback(error);
    }
    // Returns string with [] breed name bad
    if (body === "[]") {
      return callback("Something wrong with Breed name");
    }
    // No errors and breed correct return body.description
    const data = JSON.parse(body);
    return callback(data[0].description);
  });
};

module.exports = { fetchBreedDescription };
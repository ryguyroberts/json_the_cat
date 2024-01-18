const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      return callback(error, response);
    }
    // Returns string with [] breed name bad
    if (body === "[]") {
      return callback(error, `Something wrong with Breed name ${breed}.`);
    }
    // No errors and breed correct return body.description
    const data = JSON.parse(body);
    return callback(error, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
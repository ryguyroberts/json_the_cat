const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    // Print the error if one occurred
    console.log(`Error with the URL`);
    console.log('error:', error);
    return;
  }
  if (response.statusCode !== 200) {
    // Print the response status code if an error. 200 Normal response
    console.log('statusCode:', response && response.statusCode);
    console.log(`Breed name not found!`);
    return;
  }
  // breed wrong returns an string empty
  if (body === "[]") {
    console.log(`Couldn't find breed ${breed}`);
    return;
  }
  // Nothing wrong print description of breed
  const data = JSON.parse(body)
  console.log(data[0].description);
});


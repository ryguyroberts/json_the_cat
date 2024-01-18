const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

// Quick cs function
const logOutput = (element) => {
  console.log(element);
};

fetchBreedDescription(breedName, logOutput);

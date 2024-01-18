const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

// Quick cs function for testing
const logOutput = (element, element2) => {
  // If no error we only only interested in element 2 the decriptions
  if (element === null) {
    return console.log(element2);
  }
  return console.log(element, element2);
};

fetchBreedDescription(breedName, logOutput);

//Prints the properties of the given object which have the type of string.

function showProperties(obj) {
  for (let property in obj)
    if (typeof obj[property] === 'string')
        console.log(`${property} ${obj[property]}`);
}

const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b',
};

showProperties(movie);
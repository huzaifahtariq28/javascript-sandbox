// This function takes an array of movie objects and the target year as arguments. 
// Then it, filters the array based on that year, sorts the array based on the ratings in the descending order and returns the title of the movies.

function getTopRatedMoviesByYear(movies, year) {
  return movies
    .filter((m) => m.year === year && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map((m) => m.title)
}

const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 },
];

const filteredMovies = getTopRatedMoviesByYear(movies, 2018);
console.log('Filtered Movies by Year: ', filteredMovies);

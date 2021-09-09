const NumberOfFilms = +prompt('How much films did u see?', '');

const personalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const a = prompt('What is one of the last film did u watch?', ''),
    b = prompt('Mark this film'),
    c = prompt('What is one of the last film did u watch?', ''),
    d = prompt('Mark this film');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

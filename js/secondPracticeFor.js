'use strict';

const numberOfFilms = +prompt('How much films did u see?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    console.log('U see too not many films');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('U are class viewer');
} else if (personalMovieDB.count >= 30) {
    console.log('U are movie fan');
} else {
    console.log('Error');
}


for (let i = 0; i < 2; i++) {
    const a = prompt('What is one of the last film did u watch?', ''),
        b = prompt('Mark this film', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        alert('Cant be null or more then 50');
        i--;
    }
}

console.log(personalMovieDB);
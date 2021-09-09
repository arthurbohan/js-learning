'use strict';

const numberOfFilms = +prompt('How much films did you watch?', '');

// function calcNumberOfFilms(){
//     let numberOfFilms = +prompt('How much films did you watch?', '');
//     return numberOfFilms;
// }

// const numberOfFilms = calcNumberOfFilms();
// console.log(numberOfFilms);

// function askNumberOffilms(arg) {
    // arg = +prompt('How much films did you watch?', '');
// }

// askNumberOffilms(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

// for (let i = 0; i < 1; i++) {
// askNumberOffilms(numberOfFilms);
if (personalMovieDB.count < 10) {
    console.log('U see not many films');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('U are class viewer');
} else if (personalMovieDB.count >= 30) {
    console.log('U are movie fan');
} else {
    console.log('Error');
    // i--;
}
// }


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
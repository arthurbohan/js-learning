'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How much films did you watch?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How much films did you watch?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('U see not many films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('U are classic viewer');
    } else if (personalMovieDB.count >= 30) {
        console.log('U are movie fan');
    } else {
        console.log('Error');
    }
}

detectPersonalLevel();

function rememberMyFilms() {
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
}

rememberMyFilms();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGeners() {
    for (let i = 0; i <= 3; i++) {
        personalMovieDB.geners[i - 1] = prompt(`Your favorite ganre number ${i}`);
    }
}

writeYourGeners();


// function showMyDB(hidden){
//     if(!hidden){
//         console.log(personalMovieDB); 
//     }
// }
// showMyDB(personalMovieDB.private);


'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    geners: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('How much films did you watch?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How much films did you watch?', '');
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('U see not many films');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('U are classic viewer');
        } else if (personalMovieDB.count >= 30) {
            console.log('U are movie fan');
        } else {
            console.log('Error');
        }
    },
    rememberMyFilms: function () {
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
    },
    writeYourGeners: function () {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.geners[i - 1] = prompt(`Your favorite ganre number ${i}`);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
};

// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.writeYourGeners();
// personalMovieDB.showMyDB(personalMovieDB.privat);


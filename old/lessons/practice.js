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
            let genre = prompt(`Your favorite ganre number ${i}`);

            if (genre === '' || genre === null) {
                console.log('You wrote uncorrect value');
                i--;
            } else {
                personalMovieDB.geners[i - 1] = genre;
            }
        }
        personalMovieDB.geners.forEach(function (item, i) {
            console.log(`Lovely genre ${i + 1} - this is ${item}`);
        });
    },
    writeYourGenersWithComma: function () {
        for (let i = 1; i < 2; i++) {
            let geners = prompt('Write ur geners with comma');
            if (geners === '' || geners === null) {
                console.log('You wrote uncorrect value');
                i--;
            } else {
                personalMovieDB.geners = geners.split(', ');
                personalMovieDB.geners.sort();
            }
        }
        personalMovieDB.geners.forEach(function (item, i) {
            console.log(`Lovely genre ${i + 1} - this is ${item}`);
        });

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


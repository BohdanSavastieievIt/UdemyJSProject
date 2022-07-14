"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const lastMovie = prompt('Один из последних просмотренных фильмов?', ''),
      lastMovieScore = prompt('На сколько оцениваете его?', '');
personalMovieDB.movies[lastMovie] = lastMovieScore;

console.log(personalMovieDB.movies);
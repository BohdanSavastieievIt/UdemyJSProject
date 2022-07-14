"use strict";

const numberOfFilms = +prompt('How many movies you have watched in your life?', '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const watchedMoviesAmount = prompt('How many movies you want to put in the base?');

for(let i = 0; i < watchedMoviesAmount; i++){
    const lastMovie = prompt('Enter the name of one of the movies you have watched recently?', '');
    const lastMovieScore = prompt('What is your score for it?', '');

    if (lastMovie != '' && lastMovieScore != '' && lastMovie.length < 50 && lastMovie != null && lastMovieScore != null){
        personalMovieDB.movies[lastMovie] = lastMovieScore;
    }
    else{
        alert("An error has occured");
        i--;
    }
}

if (personalMovieDB.count < 10){
    alert('Quite a few movies have been watched');
}
else if(personalMovieDB.count < 31){
    alert('You have watched an average amount of movies');
}
else if(personalMovieDB.count > 30){
    alert('You are the cinephile');
}
else {
    alert('An error has occured');
}

console.log(personalMovieDB.movies);

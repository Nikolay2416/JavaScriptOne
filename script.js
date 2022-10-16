
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let viewedMovieA = prompt('Один из последних просмотренных фильмов?', ''),
    filmScoreB = prompt('На сколько оцените его?', ''),
    viewedMovieC = prompt('Один из последних просмотренных фильмов?', ''),
    filmScoreD = prompt('На сколько оцените его?', '');

personalMovieDB.movies[viewedMovieA] = filmScoreB;
personalMovieDB.movies[viewedMovieC] = filmScoreD;


console.log(personalMovieDB);
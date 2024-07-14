var showMovieInfo;

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
}
showMovieInfo(movie);

var movie;

showMovieInfo(movie);

movie = {};

showMovieInfo(movie);

movie.title = "Interstellar";
movie.actors = "Matthew McConaughey, Anne Hathaway, Jessica Chastain";
movie.director = "Christopher Nolan";

showMovieInfo(movie);

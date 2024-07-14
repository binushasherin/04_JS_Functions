var movie1;
var showMovieInfo;
var movie;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

movie = movie1;

showMovieInfo();

let movie2 = {};

movie = movie2;

showMovieInfo(movie);


movie2.title = "The Dark Knight";
movie2.actors = "Christian Bale, Heath Ledger, Aaron Eckhart";
movie2.director = "Christopher Nolan";

movie = movie2;

showMovieInfo(movie);

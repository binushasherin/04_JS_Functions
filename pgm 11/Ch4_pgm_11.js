
var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
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

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();


var  quizQuestion1 = {
    question: "What is the capital of France?",
    options: ["A. Berlin", "B. Madrid", "C. Paris", "D. Rome"],
    correctAnswer: "C"
};

var  quizQuestion2 = {
    question: "What is 2 + 2?",
    options: ["A. 3", "B. 4", "C. 5", "D. 6"],
    correctAnswer: "B"
};

var  quizQuestion3 = {
    question: "What is the largest planet in our solar system?",
    options: ["A. Earth", "B. Jupiter", "C. Mars", "D. Venus"],
    correctAnswer: "B"
};


function showQuizQuestion(quizQuestion) {
    console.log("Question:", quizQuestion.question);
    quizQuestion.options.forEach(option => console.log(option));
    console.log("\n");
}


var currentQuestion;

currentQuestion = quizQuestion1;
showQuizQuestion(currentQuestion);

currentQuestion = quizQuestion2;
showQuizQuestion(currentQuestion);

currentQuestion = quizQuestion3;
showQuizQuestion(currentQuestion);

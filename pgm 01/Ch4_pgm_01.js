var movie1;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");


movie2 = {
    title: "Inception",
    directors: "Christopher Nolan"
};

console.log("Movie Title:", movie2.title);
console.log("Directors:", movie2.directors);

var blogPost = {
    title: "JavaScript Basics",
    author: "John Doe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    publishDate: "2023-07-14",
    likes: 56,
    comments: [
        { user: "Alice", comment: "Great post!" },
        { user: "Bob", comment: "Very informative." }
    ]
};



console.log("\nBlog Post Title:", blogPost.title);
console.log("Author:", blogPost.author);
console.log("Publish Date:", blogPost.publishDate);
console.log("Likes:", blogPost.likes);
console.log("Content:\n", blogPost.content);


console.log("\nComments:");
blogPost.comments.forEach(comment => {
    console.log(comment.user + ": " + comment.comment);
});


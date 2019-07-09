const posts = [
  {title: "Post One", body: "This is post one"},
  {title: "Post Two", body: "This is post two"}
];

//CASE 1: without a callback function
// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post)
//   }, 2000);
// }
//
// function getPosts() {
//   setTimeout(function() {
//     let output = "";
//
//     posts.forEach(function(post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }
//
// createPost({title: "Post Three", body: "This is post three"});
//
// getPosts();

// CASE 2: with a callback function! It is just a function that accepts a function and call this in the end as callback. It is like concatenation procedures of execution!

function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = "";

    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: "Post Three", body: "This is post three"}, getPosts);

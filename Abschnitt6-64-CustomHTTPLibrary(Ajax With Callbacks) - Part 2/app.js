const http = new easyHTTP;

// GET Posts
// http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });


// GET Single Post
// http.get("https://jsonplaceholder.typicode.com/posts/1", function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create data
const data = {
  title: "Custom Post",
  body: "This is a custom post updated"
};

// Create Post
// http.post("https://jsonplaceholder.typicode.com/posts", data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Update Post of id 1 because of posts/1
// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Delete Post
http.delete("https://jsonplaceholder.typicode.com/posts/1", function(err, response) {
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});

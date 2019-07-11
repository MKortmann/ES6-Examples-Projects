document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);

// you have to use fetch 2 times because fetch return a promise. And the response.text() returns also a promise.
// GET LOCAL TEXT FILE
// function getText() {
//   fetch("text.txt")
//     .then(function(response) {
//       return response.text();
//     })
//     .then(function(data) {
//       document.getElementById("output").innerHTML = data;
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// }

// GET LOCAL TEXT FILE SAME AS ABOVE BUT USING ARROW FUNCTIONS
function getText() {
  fetch("text.txt")
    .then( response => response.text())
    .then( data =>     document.getElementById("output").innerHTML = data
    )
    .catch( err => console.log(err) );
}

// GET LOCAL JSON DATA
function getJson() {
  fetch("posts.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let output = "";
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      })
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}


// GET LOCAL External API
function getExternal() {
  fetch("https://api.github.com/users")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let output = "";
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      })
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}

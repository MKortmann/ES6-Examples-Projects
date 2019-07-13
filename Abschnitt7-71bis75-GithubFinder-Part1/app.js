// init GitHub
const github = new GitHub;

// init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== "") {
    // Make http call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === "Not Found") {
          // Show alert

        } else {
          //  Show the profile
          ui.showProfile(data.profile);
        }
      })
  } else {
    // clear the profile
  }
})

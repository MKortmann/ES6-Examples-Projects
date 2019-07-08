
document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  debugger
  // create an XHR object - instatiating
  const xhr = new XMLHttpRequest();

  // Optional - used for spinners/loaders
  xhr.onprogress = function() {
    console.log("READYSTATE: ", xhr.readyState);
  }

  // OPEN - the third parameter true: means that it is an async request
  xhr.open("GET", "data.txt", true);
  console.log("READYSTATE: ", xhr.readyState);
  xhr.onload = function() {
    console.log("READYSTATE: ", xhr.readyState);
    // check if status is equal 200 (means everything is ok.)
    if(this.status === 200) {
      // console.log(this.responseText);
      document.getElementById("output").innerHTML = `<h1>${this.responseText}</h1>`
    }
  }

  // we are using xhr.onload instead of xhr.onreadystatechange!
  // onload is a newest way to do that is easier because we do not need to check about readystate.

  xhr.onerror = function() {
    console.log("Request error in XMLHttpRequest...");
  }

  xhr.send();

  //  readyState Values
  //  0: request not intialized
  // 1: server connection established
  // 2: request received
  // 3: processing XMLHttpRequest
  // 4: request finished and response is ready

  // HTTP Statuses
  // 200: ok
  // 403: "Forbidden"
  // 404: "Not Found"

}

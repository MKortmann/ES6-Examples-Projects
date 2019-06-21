//Template Literals

const name = "John";
const age = 31;
const job = "Web Developer";
const city = "Miami";

let html;

// Without template strings (Es5): the old way of doing things! It is very tedious and annoying!

html = "<ul><li>Name: " + name + "</li><li>Age: " + age + "</li><li>Job: "  + job + "</li><li>City:" + city + " </li></ul>";

html =  "<ul>" + 
        "<li>Name: " + name + "</li>" + 
        "<li>Age: " + age + "</li>" +
        "<li>Job: "  + job + "</li>" +
        "<li>City:" + city + " </li></ul>";




function hello() {
  return "hello";
}


// With template strings(ES6), use backticks `
// We see that we can also do conditionals inside
// this variables!

html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>  
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? "Over 30" : "Under 30"}</li>  
  </ul>
  `;

  document.body.innerHTML = html;

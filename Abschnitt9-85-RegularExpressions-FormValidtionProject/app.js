
// Form Blur Event Listeners
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName() {
  const name = document.getElementById("name");
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}
function validateZip() {
  const name = document.getElementById("zip");
  const re = /^[0-9]{5}(-[0-9]{4})?$/; //It works for: 33445 or 33455-9808. // () parentheses represents a group. In this case this group can exist or not because of the sign ? .

  if(!re.test(zip.value)) {
    zip.classList.add("is-invalid");
  } else {
    zip.classList.remove("is-invalid");
  }

}
function validateEmail() {
  const email = document.getElementById("email");
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/; //+ search for more than one. we want letters, numbers and _ , - and . ....
  // We accept email ilke: sölkfjls12@gmail.com OR companymv12@FirmaXXX.media
  if(!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}
function validatePhone() {
  const phone = document.getElementById("phone");
  // We will accept many differnts formats as: 555 555 5555, 5556668888, 555-555-5555,
  // 777.777.7777, (999) 999 9900
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/; // \(? means that we can or not have parentheses here.

  if(!re.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}

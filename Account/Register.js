const form = document.getElementsByTagName("form")[1];
const email = document.getElementById("email");
const Username = document.getElementById("username");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
password.type = "password";
confirmpassword.type = "password";
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isDataValid = checkInputs();
  if (isDataValid) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "action.php", true);
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // callback function after successful reply
      }
    };
    xhttp.send();
    location.href = "../Account/Thankyou.html";
  }
});
function checkInputs() {
  let isDataValid = [];
  const UsernameValue = Username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmpasswordValue = confirmpassword.value.trim();
  if (UsernameValue === "") {
    setErrorFor(Username, "Username cannot be blank");
    isDataValid.push(false);
  } else {
    setSuccessFor(Username);
  }
  if (emailValue === "") {
    isDataValid.push(false);
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    isDataValid.push(false);
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }
  if (passwordValue === "") {
    isDataValid.push(false);
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }
  if (confirmpasswordValue === "") {
    setErrorFor(confirmpassword, "Password2 cannot be blank");
    isDataValid.push(false);
  } else if (passwordValue !== confirmpasswordValue) {
    isDataValid.push(false);
    setErrorFor(confirmpassword, "Passwords does not match");
  } else {
    setSuccessFor(confirmpassword);
  }
  return isDataValid.length === 0;
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  input.style.border = "1px solid red";
  const small = formControl.children[3];
  formControl.className = "form-control error";
  small.innerText = message;
  formControl.appendChild(small);
}
function setSuccessFor(input) {
  input.style.border = "";
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

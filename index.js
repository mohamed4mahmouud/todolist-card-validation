function submitForm() {
  var userName = document.getElementById("user-name").value;
  var password = document.getElementById("pass").value;
  var nameErr = document.getElementById("user-nameErr");
  var passErr = document.getElementById("passErr");

  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (userName === "") {
    nameErr.innerHTML = "Please enter your name";
  } else if (!regex.test(password)) {
    passErr.innerHTML =
      "Password must contain at least one capital letter, one small letter, and one number";
  } else {
    alert("login success");
  }
}

document.getElementById("btn").onclick = submitForm;

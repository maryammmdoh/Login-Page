var nameInput = document.getElementById("userName");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

var emailInputLog = document.getElementById("emailLogin");
var passwordInputLog = document.getElementById("passwordLogin");

//pages
var Login = document.getElementById("login");
var Register = document.getElementById("Register");
var Home = document.getElementById("Home");

//Buttons
//Page Login
var signUp = document.getElementById("signUp");
var enterPage = document.getElementById("enterPage");
//Page Register
var newUser = document.getElementById("newUser");
var signIn = document.getElementById("signIn");
//Page Home
var logOut = document.getElementById("logOut");

var users = JSON.parse(localStorage.getItem("users")) || [];

function homePage(userName) {
  Home.innerHTML = `
    <div class="vh-100 bg-info-subtle">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">

                    <a class="navbar-brand" href="#">Home</a>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <form class="d-flex" role="search">
                            <button class="btn blue-color btn-outline-info" type="submit" id="logOut" onclick="returnToLogin()">Logout</button>
                        </form>
                    </div>

                </div>
            </nav>

            <div class="main text-center">
                <div class="container">
                    <div class="inputs bg-body-tertiary px-5 shadow-lg py-4">
                        <h2 class="m-auto my-4">Welcome ${userName}</h2>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function returnToLogin() {
  Login.classList.remove("d-none");
  Register.classList.add("d-none");
}

function addNewUser() {
  // Check if fields are empty
  if (!nameInput.value || !emailInput.value || !passwordInput.value) {
    document.getElementById("missingInputs").classList.remove("d-none");
    document.getElementById("alreadyExists").classList.add("d-none");
    document.getElementById("success").classList.add("d-none");
    return;
  }

  // Check if email already exists
  var exists = false;
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === emailInput.value) {
      exists = true;
      break;
    }
  }
  if (exists) {
    document.getElementById("alreadyExists").classList.remove("d-none");
    document.getElementById("success").classList.add("d-none");
    document.getElementById("missingInputs").classList.add("d-none");
    clearForm();
    return;
  }

  //Check Validation
  if (
    nameInput.classList.contains("is-valid") &&
    emailInput.classList.contains("is-valid") &&
    passwordInput.classList.contains("is-valid")
  ) {
    var user = {
      name: nameInput.value,
      email: emailInput.value,
      pass: passwordInput.value,
    };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("success").classList.remove("d-none");
    document.getElementById("missingInputs").classList.add("d-none");
    document.getElementById("alreadyExists").classList.add("d-none");
    clearForm();
  }
}

function checkuser() {
  var enteredEmail = emailInputLog.value.toLowerCase();
  var enteredPassword = passwordInputLog.value;
  //Check if fields are empty
  if (!enteredEmail || !enteredPassword) {
    Home.classList.add("d-none");
    Login.classList.remove("d-none");
    document.getElementById("missingInputsLogin").classList.remove("d-none");
    document.getElementById("incorrect").classList.add("d-none");
    return;
  }
  //Search if user exist or not
  var found = false;
  var userNameLogged = "";

  for (var i = 0; i < users.length; i++) {
    if (users[i].email.toLowerCase() === enteredEmail && users[i].pass === enteredPassword) {
      found = true;
      userNameLogged = users[i].name;
      break;
    }
  }

  if (found) {
    homePage(userNameLogged);
    Home.classList.remove("d-none");
    Login.classList.add("d-none");
    Register.classList.add("d-none");
    document.getElementById("incorrect").classList.add("d-none");
    document.getElementById("missingInputsLogin").classList.add("d-none");
  } else {
    Home.classList.add("d-none");
    Login.classList.remove("d-none");
    document.getElementById("incorrect").classList.remove("d-none");
    document.getElementById("missingInputsLogin").classList.add("d-none");
  }
  emailInputLog.value = null;
  passwordInputLog.value = null;
  found = false;
}


function clearForm() {
  nameInput.value = null;
  emailInput.value = null;
  passwordInput.value = null;

  nameInput.classList.remove("is-valid");
  emailInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-valid");
}

function validateIndex(element) {
  var regex = {
    userName: /^[A-Za-z0-9\s'-]{2,10}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^.{8,}$/,
  };

  if (regex[element.id].test(element.value) == true) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.add("d-none");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    element.nextElementSibling.classList.remove("d-none");
  }
}

signUp.addEventListener("click", function () {
  Register.classList.remove("d-none");
  Login.classList.add("d-none");
  Home.classList.add("d-none");
});

enterPage.addEventListener("click", function () {
  Home.classList.remove("d-none");
  Register.classList.add("d-none");
  Login.classList.add("d-none");
  checkuser();
});

logOut.addEventListener("click", function () {
  Login.classList.remove("d-none");
  Home.classList.add("d-none");
  Register.classList.add("d-none");
});

newUser.addEventListener("click", function () {
  addNewUser();
});


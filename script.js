document.addEventListener("mousedown", handleClickOutside);
function handleClickOutside(event) {
  let signDiv = document.getElementById("signIn");
  if (event.target == signDiv) {
    signDiv.style.display = "none";
    document.body.style.overflowY = "visible";
    clickedSignIn();
  }
}

var signIn = false;
function playTrailer() {
  let newdiv =
    "<video controls autoplay> <source src='assets/mp4/THE BATMAN – Main Trailer.mp4'></video>";
  let div = document.getElementsByClassName("movieShowCaseContainer")[0];
  div.innerHTML = newdiv;

  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.width = "100%";
  div.style.height = "100%";

  div.classList.add("videoTrailer");
}

function signInBtnOpen() {
  let signDiv = document.getElementById("signIn");
  signDiv.style.display = "flex";

  document.body.style.overflow = "hidden";
}

function submitSignInBtn() {
  document.getElementById("signIn").style.display = "none";
  let usernameValue = document.getElementById("username").value;
  let passwordValue = document.getElementById("password").value;
  if (usernameValue === "" && passwordValue === "") {
    usernameValue = document.getElementById("username_register").value;
    passwordValue = document.getElementById("password_register").value;
  }
  var connctedUser =
    '<li style="font-weight: 500;opacity: 1;border: 1px solid;border-radius: 5px;border-color: white;padding: 4px 2px;" id="userLogo">' +
    ' <span style="margin:0 5px;display:inline">' +
    usernameValue +
    '</span><img src="assets/logo/user.png" alt="user" /></li>';
  document.getElementById("userLogo").outerHTML = connctedUser;

  document.getElementsByName("form").forEach((item) => item.reset());
  document.body.style.overflowY = "visible";
  signIn = true;
}

function clickedSignUp() {
  document.getElementsByClassName("signInContainer")[0].style.display = "none";
  document.getElementsByClassName("signUpContainer")[0].style.display = "flex";
  document.getElementsByName("form").forEach((item) => item.reset());
}
function clickedSignIn() {
  document.getElementsByClassName("signInContainer")[0].style.display = "flex";
  document.getElementsByClassName("signUpContainer")[0].style.display = "none";
  document.getElementsByName("form").forEach((item) => item.reset());
}

function movieSearchChange(val) {
  let searchDiv = document.getElementById("searchedMovies");
  console.log(val === "");
  if (val === "") {
    searchDiv.innerHTML = "";
  } else {
    searchDiv.innerHTML =
      ' <div class="gridContainer"><div class="column">' +
      '<img src="assets/movies/openheimer.webp" alt="" /><span>openheimer</span></div><div class="column"><img src="assets/movies/openheimer.webp" alt="" /><span>openheimer</span></div></div>';
  }
}

function bookTicketSubmit() {
  if (signIn == false) {
    alert("USER NOT SIGNED IN!!");
    return;
  }
  let inpoutValue = new Date(document.getElementById("TicketDate").value);
  var today = new Date();

  if (inpoutValue.getTime() < today.getTime()) {
    alert("DATE ALREADY PASSED!!");
    return;
  }
  alert("Congrats on buying a ticket");
  window.location.href = "/index.html";
}

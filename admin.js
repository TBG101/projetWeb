function admingLogin() {
  alert("DANGER! ADMIN USERS ONLY");
  user = prompt("ENTER YOUR USERNAME");
  if (user != "root") return false;
  pass = prompt("ENTER PASS");
  if (pass != "root") return false;
  return true;
}

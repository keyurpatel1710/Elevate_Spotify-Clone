
function logout(){
  localStorage.removeItem("name");
  localStorage.removeItem("number");
  localStorage.removeItem("email");
  alert(window.location.href="login.html");
}

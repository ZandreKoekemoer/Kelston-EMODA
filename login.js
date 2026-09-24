const DEMO_USER="admin";
const DEMO_PASS="Kelston2026";
if(sessionStorage.getItem("kelstonAdminLoggedIn")==="true") location.replace("admin.html");
const form=document.getElementById("loginForm"),u=document.getElementById("username"),pw=document.getElementById("password"),err=document.getElementById("loginError");
document.getElementById("togglePassword").onclick=()=>{const show=pw.type==="password";pw.type=show?"text":"password";document.getElementById("togglePassword").textContent=show?"HIDE":"SHOW"};
form.onsubmit=e=>{e.preventDefault();if(u.value.trim()===DEMO_USER&&pw.value===DEMO_PASS){sessionStorage.setItem("kelstonAdminLoggedIn","true");location.replace("admin.html")}else{err.textContent="Incorrect username or password.";pw.value="";pw.focus()}};
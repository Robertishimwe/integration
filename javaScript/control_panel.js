const permision = sessionStorage.getItem("LoggedIn")
if(permision.Role == "admin"){
    alert("welcome to admin panel")
}else{
    location = "../html/login.html";
}
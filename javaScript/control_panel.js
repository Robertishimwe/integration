const permision = sessionStorage.getItem("LoggedIn")
if(permision){
    alert("welcome to admin panel")
}else{
    location = "../html/login.html";
}
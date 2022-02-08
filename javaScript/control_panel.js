const permision = sessionStorage.getItem("LoggedIn")
if(!permision){
  location = "../html/login.html"
}
else if(JSON.parse(permision).Role == "admin"){
    alert("welcome to admin panel")
}else{
    // location = "../html/login.html";
    console.log(permision)
    setTimeout(() => { location = "../html/login.html"}, 3000);
}
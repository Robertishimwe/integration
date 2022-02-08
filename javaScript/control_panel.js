const permision = sessionStorage.getItem("LoggedIn")
if(JSON.parse(permision).Role !== "admin") return location = "../html/login.html";
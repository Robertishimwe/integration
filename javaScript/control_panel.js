const permision = sessionStorage.getItem("LoggedIn")
 if(!permision){
    location = "../html/login.html"
 }
 else if(JSON.parse(permision).Role == "admin"){
    alert("welcome to admin panel")  
 }else{
    
    console.log(permision)
    location = "../html/login.html"
}
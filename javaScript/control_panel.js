const permision = sessionStorage.getItem("LoggedIn")
 if(!permision){
    location = "../html/login.html"
 }
 else if(JSON.parse(permision).Role == "admin"){
    console.log("test")  
 }else{
    
    console.log(permision)
    location = "../html/login.html"
}
let AdminUsers = {
  userName:"admin",
  userEmail:"andela@andela.com",
  password:"Andela",
  type:"Singleuser",
  userID:"admin"
}


//set admin email && password by default
// localStorage.setItem("adminEmail","andela@andela.com")
// localStorage.setItem("adminPass","Andela")
localStorage.setItem("admin",JSON.stringify(AdminUsers))


function login(){
let userEmail = document.getElementById("user_email").value;
let password = document.getElementById("user-password").value;
let error_message = document.getElementById("error_message");
let regex = /\w+@[a-zA-Z]+\.[com|net|rw|org|edu|co|shop|air]/;
let regexPass = /\w|\d/;
let passwordValidity = regexPass.test(password);
let emailValidity = regex.test(userEmail);
// let adminEmail = localStorage.getItem("adminEmail")
// let adminPass =  localStorage.getItem("adminPass")

  administrator = (JSON.parse(localStorage.getItem("admin")))
  administratorEmail =  administrator.userEmail;
  administratorPass = administrator.password;
// localStorage.setItem("admin",JSON.stringify(AdminUsers))
// console.log(adminEmail)
// console.log("pass:"+ passwordValidity)

console.log(administratorEmail)
console.log(administratorPass)


for(let i=0;i<localStorage.length;i++){
  keyy = localStorage.key(i)
  let arr = JSON.parse(localStorage.getItem(keyy))
  
   storedUserEmail= arr.userEmail;
   storedUserPassword = arr.password;
   storedUserType = arr.type;
   storedUserId = arr.userID;
   storedUserName = arr.userName;


    


    
     if(userEmail == administratorEmail && password == administratorPass){
      location = "../html/control_panel.html"; 
    }

if(storedUserType == `Singleuser`) {

// console.log(localStorage.getItem("admin"))
   







//end of declaration part

//redirect to admin panel

 if(userEmail == storedUserEmail && password == storedUserPassword){

  currrentlyLogged = {

    storedUserEmail:storedUserEmail,
    storedUserPassword: storedUserPassword,
    storedUserType: storedUserType,
    storedUserId: storedUserId,
    storedUserName: storedUserName
   }
   localStorage.setItem("currentLoggedIn",JSON.stringify(currrentlyLogged))
  location = "../html/blogTest.html"; 
}

 //email is valid but password is empty
 else if(emailValidity == true & password ==""){
   let msg = "Enter your Password"
   error_message.style.display="block";
   error_message.innerText = msg;
   document.getElementById("user_email").style.border="1px solid green";
   document.getElementById("user-password").style.border="none";
// correct email but invalid password
 }else if(userEmail == administratorEmail & passwordValidity == false){
   let msg = "Enter Your Password"
   error_message.style.display="block";
   error_message.innerText = msg;
   document.getElementById("user_email").style.border="1px solid green";
   document.getElementById("user-password").style.border="none";
   
}
//correct email but passward doesn't mutch 
else if(userEmail == administratorEmail & password != administratorPass){
   let msg = "Incorrect password";
   error_message.style.display="block";
   error_message.innerText = msg;
   document.getElementById("user_email").style.border="1px solid green";
   document.getElementById("user-password").style.border="none";
   
}else if(userEmail == ""){
      let msg1 = "Please Enter Your Email";
      error_message.style.display="block";
      error_message.innerText = msg1;
      document.getElementById("user_email").style.border="1px solid red";
 }else if(emailValidity == false){
         let msg = "Invalid Email!";
         error_message.style.display="block";
          error_message.innerText = msg;
         document.getElementById("user_email").style.border="1px solid red";
         document.getElementById("user-password").style.border="none";
 }else if(emailValidity == true && passwordValidity == false){
   let msg = "Please Enter Your Password";
   error_message.style.display="block";
   error_message.innerText = msg;
   document.getElementById("user_email").style.border="1px solid green";
   document.getElementById("user-password").style.border="1px solid red";

 }
 else{
   let msg = "Entered credentials doesn't match any account";
   error_message.style.display="block";
   error_message.innerText = msg;
   document.getElementById("user_email").style.border="none";
   document.getElementById("user-password").style.border="none";
 }


}}}
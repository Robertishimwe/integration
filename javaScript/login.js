

function login(){
let userEmail = document.getElementById("user_email").value;
let password = document.getElementById("user-password").value;
 error_message = document.getElementById("error_message");
let regex = /\w+@[a-zA-Z]+\.[com|net|rw|org|edu|co|shop|air]/;
let regexPass = /\w|\d/;
let passwordValidity = regexPass.test(password);
let emailValidity = regex.test(userEmail);


error_message.style.display="block";
error_message.innerHTML =`

<img src="../images/Spinner.gif" alt="loading..." width="30px" height="30px">` ;



 //email is valid but password is empty
 if(emailValidity == true & password ==""){
   let msg = "Enter your Password"
   error_message.style.display="block";
   error_message.innerText = msg;
   document.getElementById("user_email").style.border="1px solid green";
   document.getElementById("user-password").style.border="none";
// correct email but invalid password
 }
//correct email but passward doesn't mutch 
else if(userEmail == ""){
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

  const UserRequestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
        userEmail:userEmail,
        userPassword:password
     })
};
  

fetch('https://my-brand-api-v2.herokuapp.com/api/user/login', UserRequestOptions)

          
 .then(response => response.json())
 .then(data => {console.log(data)

  error_message.style.display="block";
  error_message.innerText = JSON.stringify(data.Message);
  // sessionStorage.setItem("LoggedIn",data.userData)
  sessionStorage.setItem("token",JSON.stringify(data.token))
  let permission = sessionStorage.getItem("token")

  if(data.role == 'admin'){

  setTimeout(()=>{  location = "../html/control_panel.html"},3000)

  }else if(data.role == 'user'){

    location = "../html/blogTest.html"

  }
  



  console.log(data.userData.Role)



});
console.log("request send")
}


}



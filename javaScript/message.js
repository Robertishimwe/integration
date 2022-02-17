 















// actual function



 let storeMessage = () =>{

   // declaration of valiable

let sendName = document.querySelector("#name").value;
let email = document.querySelector("#email").value;
let message = document.querySelector("#message").value;
let myForm = document.querySelector(".contact-form");

if(sendName == '' || email == "" || message == ""){
   return;
}else{

   const UserRequestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
   
         name:sendName,
         email:email,
         message:message
   
   
      })
   };
   
   fetch('https://my-brand-api-v2.herokuapp.com/api/contact/send', UserRequestOptions)
    
      .then(response => response.json())
      .then(data => {console.log(data)})
      console.log("deal done")
      myForm.reset()
      
   
}
 


}

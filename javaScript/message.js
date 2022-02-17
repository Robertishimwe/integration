 















// actual function



 let storeMessage = () =>{
   // document.getElementById("demo").innerHTML = "Paragraph changed!";

   // declaration of valiable

let sendName = document.querySelector("#name").value;
let email = document.querySelector("#email").value;
let message = document.querySelector("#message").value;
let myForm = document.querySelector(".contact-form");
let formload = document.querySelector(".contact-section")
let btn = document.querySelector("#demo");


if(sendName == '' || email == "" || message == ""){
   return;
}else{
   formload.innerHTML = `


   <style>
   .loader{
      display:flex;
      margin:auto;
   }
   </style>
   <img src="./images/Spinner.gif" class="loader">
   `


   
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
    
      .then(response => {
      console.log(response)
      
         const popUp = document.createElement("p")
         console.log(response.status)
 
         if(response.status == 200 ){
            // const removeComment = document.querySelector(".comment-section");
            // removeComment.style.display="none"
            // textNode = document.createTextNode("message sent")
            // popUp.appendChild(textNode)
            // document.querySelector(".comment-section").appendChild(popUp)
         
            console.log("working")
            formload.innerHTML =`
            <style>
            .popup {
               margin: 70px auto;
               padding: 20px;
               background: #fff;
               border-radius: 5px;
               width: 30%;
               position: relative;
               transition: all 5s ease-in-out;
             }
             
             .popup h2 {
               margin-top: 0;
               color: #333;
               font-family: Tahoma, Arial, sans-serif;
             }
            </style>
            
            <div class="popup">
		      <h2>Message sent successfully </h2>
            </div>
	
            
            
            `
            setTimeout(() => {

               location.reload();


             }, 5000);
            
         
            console.log("mee")
            
            
            
         
         
        }
        else{


         formload.innerHTML =`
            <style>
            .popup {
               margin: 70px auto;
               padding: 20px;
               background: #fff;
               border-radius: 5px;
               width: 30%;
               position: relative;
               transition: all 5s ease-in-out;
             }
             
             .popup h2 {
               margin-top: 0;
               color: #333;
               font-family: Tahoma, Arial, sans-serif;
             }
            </style>
            
            <div class="popup">
		      <h2>Oops, something went wrong.</h2>
            </div>
	
            
            
            `
            setTimeout(() => {

               location.reload();


             }, 5000);
            
           
        }




      
      
      
      
      
      // })
      console.log("deal done")
      myForm.reset()
      
   
}
)}}


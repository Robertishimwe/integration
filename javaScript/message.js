// Getting time stamp


today = new Date();
date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
dateTime = date+' '+time;
console.log(dateTime)




// unique key generator

// first part of the key

let keySectionone3 = Math.floor(Math.random() * (9000000-100000)+100000);
// second part of the key
let alphab3 = ["a","b","c","d"];
let ass3 = Math.floor(Math.random()*(3-0)+0)
let keySectiontwo3 = alphab[ass]
// third part of the key

let keySectionthree3 = Math.floor(Math.random() * (90-10)+10);
//final key

let keys3 = `${keySectionone3}${keySectiontwo3}${keySectionthree3}`;


// actual function



 let storeMessage = () =>{

   // declaration of valiable

let sendName = document.querySelector("#name").value;
let email = document.querySelector("#email").value;
let message = document.querySelector("#message").value;

if(sendName == '' || email == "" || message == ""){
   return;
}else{

   let messageInfo = {
       sendName:`${sendName}`,
       email: `${email}`,
       message:`${message}`,
       timeStamp:`${dateTime}`,
       type : `message`
       
   }
   console.log(messageInfo)
   localStorage.setItem(keys3, JSON.stringify(messageInfo))
}
 

   console.log(sendName,email)
}

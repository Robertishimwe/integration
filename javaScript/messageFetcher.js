function messageListe(){

    let a = document.getElementById("board");

    let b = `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>new article</title>
    
      <style>
        //   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
        //   @import url('https://fonts.googleapis.com/css2?family=Francois+One&family=Lato:wght@300&family=Montserrat&family=Mukta&family=Roboto:wght@100&family=Rubik:wght@400;500&display=swap');
          *{
             font-family: 'Roboto', sans-serif;
             
             
           }
          .articlebox{
              width: 80%;
              height: 70vh;
              background-color: #dde9f0;
              overflow-y: scroll;
              margin: auto;
          }

          .newArticle{
              width: 100%;
              background-color: #1D53AE;
              height: 10%;
          }
          .newArticle p{
              text-align: center;
              font-size: 20px;
              padding-top: 10px;
              color: white;
          }
          .messages{
              /*margin: auto;*/
              margin-left:10px;
              margin-top: 20px;
              width: 75%;
              height: auto;
              /* border: 1px solid black; */
              background-color: white;
              border-radius: 0px 40px 40px 40px;
              box-shadow: 1px 1px 5px #1D53AE;
              font-size: 14px;
          }
          .senderAddress{
              width: 90%;
              margin: auto;
              height: 60px;
              /* border: 1px solid black; */
              margin-bottom: 4px;
              font-size:10px;
          }
          .senderName, .senderEmail, .sendingTime, .senderTitles{
              position: relative;
              line-height: 0;
              font-family: 'Lato', sans-serif;
              font-family: 'Montserrat', sans-serif;
              font-family: 'Mukta', sans-serif;
              font-family: 'Roboto', sans-serif;
              font-family: 'Rubik', sans-serif;
              font-size:16px;
              
          }
          .messageBody{
            width: 90%;
              margin: auto;
              height: auto;
              
              /* border: 1px solid black; */
          }
          .messageBody2{
            font-size:14px;
            
          }

          .cen{
              margin-left: 30%;
              width: 50%;
              margin-bottom: 5px;
          }
          .btn1{
              width: 51%;
              margin-left: 30%;
          }
      </style>
    
    
    </head>
    <body>
    
    
        <div class="articlebox">
            <div class="newArticle">
                <p>Direct Messages</p>
            </div>
            <div id ="result1"></div>


          </div>



        </div>

        </div>
        
    </body>
    </html>
  
    `    
   
   
    a.innerHTML= `${b}`;
    //modify only below this line 
    

    function art(){
        
    

            //looping through geolocation
                for(let i=0;i<localStorage.length;i++){
                     key = localStorage.key(i)
                    console.log(key)
                
                     displayer = document.getElementById("result1");
                     arr = JSON.parse(localStorage.getItem(key))
                     senderName = arr.sendName;
                     senderEmail= arr.email;
                     message = arr.message;
                     timeStamp = arr.timeStamp;
                     type = arr.type;
                    

              if(type == `message`) {
                 //console.log(long)
            

         

        displayer.innerHTML += `


    
        <div class="messages"><br/>
        <div class="senderAddress">
            <p class="senderName"><span class="senderTitles">From:   </span>${senderName}</p>
            <p class="senderEmail"><span class="senderTitles">Email: </span>${senderEmail}</p>
            <p class="sendingTime"><span class="senderTitles">Time:  </span>${timeStamp}</p>

        </div>
        <div class="messageBody">
          <p class="messageBody2">${message}</p>
          <br>
      </div>
      
      




        `
        
       }
       
    }



 } art()
    }
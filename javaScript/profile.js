function profile() {

    let a = document.getElementById("board");

    let b = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>profile</title>
        <style>
              @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
              *{
                 font-family: 'Roboto', sans-serif;
                 color: rgb(216, 211, 211);
                 
               }
            .profileContainer{
                display: flex;
                background-color: #3A5768;
                width: 90%;
                height: 60vh;       
                margin: auto;
                margin-top:19px;
                border-radius: 19px 19px 19px 19px;
                box-shadow: 1px 1px 8px 1px #888888;
            }
            .profilePicture{
                width: 30%;
                height: 100%;
               
               
            }
            .otherInfo{
                width: 70%;
                height: 100%;
              
            }
            .profilepic{
                width: 100%;
                height: 100%;
                border-radius: 20px 0px 0px 20px;
            }
            .Nametitle{
                font-size: 30px;
                padding-left: 6%;
    
            }
            .Postiontitle{
                margin-top: -30px;
                font-size: 16px;
                padding-left: 6%;
            }
            .decription{
                padding-left: 6%;
                font-size: 20px
            }
            .btnz1{
                background-color: #1D53AE;
            }
            .btnz{
                padding: 0.9%;
            }
            .btnz2{
                
                color:black;
                margin-left: 1em;
            }
            .btnz3{
                
                background:green;
                color: white;
                margin-left: 1em;
            }
            .btns{
                padding-left: 6%;
                
            }
     
    
        </style>
    </head>
    <body>
    
        <div class="profileContainer">
                <div class="profilePicture"><img src="../images/me.png" alt="ishimwe robert" class="profilepic"></div>
                    <div class="otherInfo">
                                <p class="Nametitle">Ishimwe Robert</p>
                                <p class="Postiontitle">I am Full-stack Developer from Rwanda</p>
                                <P class="decription">I enjoy taking complex problem and <br/>
                                                      turning them into simple and beutfull<br/>
                                                      interface Design. i also love the logic and <br/>
                                                      structute of coding and i always strive to<br/>
                                                      write efficient code.</P>
                            <p class="btns"> <input type="submit" value="Update profile picture" class="btnz btnz1"><input type="submit" value="Profile information" class="btnz btnz2">
                                <input type="submit" value="Save change" class="btnz btnz3"></p>
                    </div>
                    
    
                    
                               
        </div>
        
    </body>
    </html> `

    a.innerHTML= `${b}`;
}

//key generator

// first part of the key

let keySectionOne = Math.floor(Math.random() * (9000000-100000)+100000);
// second part of the key
let alpha = ["a","b","c","d"];
let as = Math.floor(Math.random()*(3-0)+0)
let keySectionTwo = alpha[as]
// third part of the key

let keySectionThree = Math.floor(Math.random() * (90-10)+10);
//final key

let key = `${keySectionOne}${keySectionTwo}${keySectionThree}`;



//end of key generator

function meee() {
    let title =document.getElementById("title").value;
    let fullArticle = document.getElementById("fullart").value;
    let imgUrl = document.getElementById("imgUrl").value;


    let articleData = {
        titleInfo: `${title}`,
        fullArticleInfo: `${fullArticle}`,
        imgUrlInfo: `${imgUrl}`,
        Comments:{},
        type:`posts`,
        likes:0,
    }

    localStorage.setItem(key, JSON.stringify(articleData))
}






function newArticle() {

    let a = document.getElementById("board");

    let b = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>new article</title>
    
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
          *{
             font-family: 'Roboto', sans-serif;
             
           }
          .articlebox{
              width: 80%;
              height: 70vh;
              background-color: #dde9f0;
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
                <p>Post new article</p>
            </div>

            <!--end of title-->

            <form method="get">
                <label for="title" class="cen">Title:</label> <br/>
                <input type="text" name="title" id="title" class="cen" required><br/>
                <label for="body" class="cen">Full Article:</label><br/>
                <textarea name="fullart" value="memmeme" id="fullart" cols="30" rows="5" class="cen" required></textarea><br/>
                <label for="photo" class="cen">Upload featured image:</label><br/>
                <input type="url" id="imgUrl" class="cen" required>
                <input type="submit" value="POST" class="btn1" onclick="meee()">
            </form>

        </div>
        
    </body>
    </html>`    
   
    a.innerHTML= `${b}`;
    //modify only below this line 


}

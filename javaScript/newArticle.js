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

    document.querySelector(".editDisplay").style.display="block"
    document.querySelector(".editDisplay").innerHTML=`
    
    
<style>
.loader{
   display:flex;
   margin:auto;
   width:30px;
   height:30px;
}
</style>
<img src="../images/Spinner.gif" class="loader">
    
    
    
    `

    const img = document.getElementById("imgUrl")
    
    const imglink =  img.files
    
     const reader =  new FileReader();
     reader.readAsDataURL(imglink[0])
     reader.addEventListener("load",()=>{
        finalImage = reader.result
        // ab = finalImage.split(",")
        let ab = finalImage.toString(2)
        // console.log(ab)




        
     





    let title =document.getElementById("title").value;
    let fullArticle = document.getElementById("fullart").value;
    let imgUrl = finalImage;


    // let articleData = {
    //     titleInfo: `${title}`,
    //     fullArticleInfo: `${fullArticle}`,
    //     imgUrlInfo: `${imgUrl}`,
    //     Comments:{},
    //     type:`posts`,
    //     likes:0,
    // }

  




    const UserRequestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': JSON.parse(sessionStorage.getItem('token')),
            
        
          },
        body: JSON.stringify({
            title: `${title}`,
            articleBody: `${fullArticle}`,
            ImageLink: `${imgUrl}`,
     
     
        })
     };
     
     
     fetch('https://my-brand-api-v2.herokuapp.com/api/articles/create', UserRequestOptions)
     .then(response => {
        console.log(response)

        if(response.status == 200){
            document.querySelector(".editDisplay").style.display="block"
            document.querySelector(".editDisplay").innerHTML='Posted successfully'
                setTimeout(() => {

        location.reload();


      }, 5000);
        }
        else{
            document.querySelector(".editDisplay").style.display="block"
            document.querySelector(".editDisplay").innerHTML='Oops, something went worng. try again later'
                setTimeout(() => {

        location.reload();


      }, 5000);
        }
    })

   


   
        
    





    // localStorage.setItem(key, JSON.stringify(articleData))
})
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
          
          .editDisplay{
            margin:auto;
            margin-left:27%;
            margin-top:7px;
            width:30%;
            height:40px;
          position: absolute;
          background: #fff;
          border-radius:13px;
          font-size:15px;
          text-align:center;
          display:none;
        }
      </style>
    
    
    </head>
    <body>
    <p class="editDisplay">ktfjdjfdfdhgdfhfdfd</p>
    
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
                <input type="file" id="imgUrl" class="cen" required>
                <input type="button" value="POST" class="btn1" onclick="meee()">
            </form>

        </div>
        
    </body>
    </html>`    
   
    a.innerHTML= `${b}`;
    //modify only below this line 


}

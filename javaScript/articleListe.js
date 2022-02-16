let deletePost=(myKey) => {



    const deleteOptions = {
    
        method: 'DELETE',
        headers: {
        
         'Token': JSON.parse(sessionStorage.getItem('token'))
     
       },
    }



    fetch('https://my-brand-api-v2.herokuapp.com/api/articles/'+myKey, deleteOptions)
    
    // location.reload();
    

}














// let deletePost=(postId)=>{
    //   console.log("mee:"+postId);
    //   console.log("hello world");
    // localStorage.removeItem(postId);
    // location.reload()
    // localStorage.setItem("currentPost",Posting)
    // console.log("robert:"+Posting)
    //  location = "../html/fullArticle.html";
    // }


// function meee() {
//     let title =document.getElementById("title").value;
//     let fullArticle = document.getElementById("fullart").value;
//     let imgUrl = document.getElementById("imgUrl").value;


//     let articleData = {
//         titleInfo: `${title}`,
//         fullArticleInfo: `${fullArticle}`,
//         imgUrlInfo: `${imgUrl}`,
//         type:`posts`,
//         likes:0,
//     }

//     localStorage.setItem(key, JSON.stringify(articleData))
// }






function articleListe() {

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
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
          *{
             font-family: 'Roboto', sans-serif;
             
           }
          .articlebox{
              width: 50%;
              height: 80vh;
              background-color: #dde9f0; 
              margin: auto;
              overflow-y: scroll;
              overflow-x: hidden;

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
          .articleContainer{
              width: 100%;
              height: 120px;
              box-shadow:0px 0px 3px black;
              border:2px solid blue;
              border-right:none;
              display: flex;
              justify-content:space-between;
          }
          .articleImage{
              width: 25%;
              height: 100%;
              border-radius: 3px;
              
          }
          .titleBodyButtons{
           width: 70%;
          }.save, .delete {
            width: 30%;
            border:none;
          }
          .save{
              background-color:rgb(47, 196, 255);
          }.delete{
              background-color: rgb(240, 83, 83);
          }
          .save:hover{
              background-color:rgb(4, 173, 240);
          }.delete:hover{
              background-color: rgb(204, 46, 46);
          }
          .articleBody, .articleTitle{
              width: 100%;
              margin-right:0;
              border: none;
              outline: none;
          }
          .articleBody{
              font-size: 10px;
              margin-top:-30px;
              padding-top:0;
          }
          .articleTitle{
              margin-top:20px;
          }

      </style>
    
    
    </head>
    <body>
    
    
        <div class="articlebox result">
            <div class="newArticle">
                <p>Article liste</p>
            </div>
                        <div id="result1"></div>

            <!--end of title-->

         
        </div>


    </body>
    </html>
    `    
   
   
    a.innerHTML= `${b}`;
    //modify only below this line 
    

   async function art(){
        


        let response = await fetch("https://my-brand-api-v2.herokuapp.com/api/articles")
        const allPosts = await response.json(); 
        console.log(allPosts);

        for(let i=0;i<allPosts.length;i++){
            let arr = allPosts[i];
            let title = arr.title;
            let img   = arr.ImageLink;
            let articleBody = arr.articleBody;
            let comments = arr.comments;
            let like = parseInt(arr.likes);
            let type = arr.type;
          



    

            //looping through geolocation
                // for(let i=0;i<localStorage.length;i++){
                    //  key = localStorage.key(i)
                    // console.log(key)
                
                     displayer = document.getElementById("result1");
                    //  arr = JSON.parse(localStorage.getItem(key))
                    //  title = arr.titleInfo;
                    //  img   = arr.imgUrlInfo;
                    //  articleBody = arr.fullArticleInfo;
                    //  like = parseInt(arr.likes);
                    //  type = arr.type;
                
                    
            
                     if(1>0) {
                 //console.log(long)
              
                 let myKey =await arr._id ;

         

        displayer.innerHTML += `<div class="articleContainer">
        <img src="${img}" class="articleImage">
        <div class="titleBodyButtons">
            <input type="text" class="articleTitle" value="${"title"}">
            <textarea class="articleBody">${articleBody}</textarea>
            <div class="articleBtns">
                <button type="submit" class="save" id= '${myKey}' onclick="saveChange('${myKey}')">Save</button>
                <button type="submit" class="delete" id= '${myKey}' onclick="deletePost('${myKey}')">Delete</button>

            </div>
        </div>                
        <div>
        <br/>

        `
        
       }
       
    }



 } art()
    }


  






    function saveChange(postID){
        let title1 = document.querySelector(".articleTitle").value;
        let body1 = document.querySelector(".articleBody").value;
    
    
    console.log(title1 , body1)
    
    
        let articleData = {
            titleInfo: `${title1}`,
            fullArticleInfo: `${body1}`,
            imgUrlInfo: `${img}`,
            type:`posts`,
            likes:like,
        }
        localStorage.setItem(postID, JSON.stringify(articleData))
        location.reload();
    }
       
    
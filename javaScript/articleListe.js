let deletePost=(myKey) => {

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

    const deleteOptions = {
    
        method: 'DELETE',
        headers: {
        
         'Token': JSON.parse(sessionStorage.getItem('token'))
     
       },
    }



    fetch('https://my-brand-api-v2.herokuapp.com/api/articles/'+myKey, deleteOptions)
    .then(response => {
        console.log(response)

        if(response.status == 204){
            document.querySelector(".editDisplay").style.display="block"
            document.querySelector(".editDisplay").innerHTML='Deleted successfully'
        }
        else{
            document.querySelector(".editDisplay").style.display="block"
            document.querySelector(".editDisplay").innerHTML='Oops, something went worng. try again later'
        }
    })

   

    setTimeout(() => {

        location.reload();


      }, 5000);
    
    // location.reload();
    

}



function saveChange(myKey){
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

    let title1 = document.querySelector(".ed").value;
    let body1 = document.querySelector(".er").value;

 
    const UpdateOptions = {

    
        method: 'PATCH',
        headers: {
         'Content-Type':'application/json',
         'Token': JSON.parse(sessionStorage.getItem('token'))
     
       },
       body: JSON.stringify({
   
        title:title1,
        articleBody:body1,

  
  
     })
    }


//  let articleData = {
//         titleInfo: `${title1}`,
//         fullArticleInfo: `${body1}`,
//         imgUrlInfo: `${img}`,
//         type:`posts`,
//         likes:like,
//     }





    
    


    fetch('https://my-brand-api-v2.herokuapp.com/api/articles/'+myKey, UpdateOptions)
    .then(response => {

        if(response.status == 200){
            document.querySelector(".editDisplay").style.display="block"
            document.querySelector(".editDisplay").innerHTML='Updated successfully'
        }
        else{
            document.querySelector(".editDisplay").style.display="block"
            document.querySelector(".editDisplay").innerHTML='Oops, something went worng. try again later'
        }
    })

   

    setTimeout(() => {

        location.reload();


      }, 5000);
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
              width: 60%;
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
              height: 170px;
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
          }.articleBdy{
              width:100%
              resize: none;
          }
          textarea {
            resize: none;
            width:97%;
            font-size: 16px;
        }
        .ed{
            font-size: 19px;
            height: 25%;
        }
        .er{
            height: 50%;
        }
          .articleBody{
              width: 100%;
              margin-right:0;
              border: none;
              outline: none;
          }
          .articleTitle{
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
          .editDisplay{
              margin:auto;
              margin-left:10px;
              width:45%;
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
    
    
        <div class="articlebox result">
        <p class="editDisplay">ktfjdjfdfdhgdfhfdfd</p>
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
        <img src="${JSON.parse(img)}" class="articleImage">
        <div class="titleBodyButtons">
            <!--<input type="text" class="articleTitle" value="${title}">
            <input type="text" class="articleTile" value="${title}">-->
           <!-- <input type="text" class="articleTitle" value="${title}">-->
            <!--<textarea class="articleBody">${articleBody}</textarea>-->
            <textarea class="articleBdy ed">${title}</textarea>
            <textarea class="articleBdy er">${articleBody}</textarea>
            
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


  






       
    
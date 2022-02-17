
//>>>>>>>>>>>>>>>>>>>>>>>>>fetching Commet<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


const fetchingCommet = async () => {
    let currentPostId  = JSON.parse(localStorage.getItem('currentPostId'));
    articleUrl = `https://my-brand-api-v2.herokuapp.com/api/articles/${currentPostId}`
    
    
    let response = await fetch(articleUrl)
        const Commentdisplayer = document.querySelector("#kk");
        const SinglePost = await response.json();
        const setOfComments = SinglePost.articles.Comments;
    
        for(let i=0;i<setOfComments.length;i++){
            // console.log(setOfComments[i])
    
    
    
        let commmentTemplete = `
          <div class="comment-container"><br/>
                <div class="sendName">
                    <p id="sendName">${setOfComments[i].username}</p>
                </div>
                <div class="commentBody">
                    <p id="commentBody">${setOfComments[i].comment} </p>
                </div><br/>
        
            </div>
          
          
          `
          Commentdisplayer.innerHTML += commmentTemplete;
    
    
    
    }
    }
    
//>>>>>>>>>>>>>>>>>>>>>>>>>Posting a comment<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


const createCommet = async () => {

    document.getElementById("postComment").style.display="none"
     console.log(postComment)
   document.getElementById("comDesplayer").innerHTML=`
   
   

   <style>
            .popup {
               margin: auto;
               padding: 0px;
               background: #fff;
               border-radius: 5px;
               width: 50%;
               position: relative;
               transition: all 5s ease-in-out;
            
             }
             .loaderr{
                 width:50px;
                 height:50px;
                 display:flex;
                 margin-left:42%;
             }
             
             .popup h2 {
               margin-top: 0;
               color: #333;
               font-family: Tahoma, Arial, sans-serif;
             }
            </style>
            
            <div class="popup">
		      <h2>  <img src="../images/Spinner.gif" class="loaderr">  </h2>
            </div>
	
   
   
   
   
   
   `


commentBody = document.getElementById("commentBody").value;
if(commentBody.trim().split("").length <= 0 ){



    document.getElementById("comDesplayer").innerHTML=`
   
   

   <style>
            .popup {
               margin: auto;
               padding: 0px;
               background: #fff;
               border-radius: 5px;
               width: 50%;
               position: relative;
               transition: all 5s ease-in-out;
            
             }
             .loaderr{
                 width:50px;
                 height:50px;
                 display:flex;
                 margin-left:42%;
             }
             
             .popup h2 {
               margin-top: 0;
               color: #333;
               font-family: Tahoma, Arial, sans-serif;
               font-size:17px
             }
            </style>
            
            <div class="popup">
		      <h2>  comment can not be empty</h2>
            </div>
	
   
   
   
   
   
   `
   document.getElementById("postComment").style.display="block"

    return
}else{




// console.log("coment body",commentBody)
const commentOptions = {
    
   method: 'PATCH',
   headers: {
    'Content-Type': 'application/json',
    'token': JSON.parse(sessionStorage.getItem('token'))

  },
    body: JSON.stringify({
      
        "comments":commentBody
        
     })
};
// console.log("coment body",commentBody)

let currentPostId  = JSON.parse(localStorage.getItem('currentPostId'));

fetch(`https://my-brand-api-v2.herokuapp.com/api/articles/comments/${currentPostId}`, commentOptions)
.then(response =>{

    if(response.status == 200){



        document.getElementById("comDesplayer").innerHTML=`
   
   

   <style>
            .popup {
               margin: auto;
               padding: 0px;
               background: #fff;
               border-radius: 5px;
               width: 50%;
               position: relative;
               transition: all 5s ease-in-out;
            
             }
             .loaderr{
                 width:50px;
                 height:50px;
                 display:flex;
                 margin-left:42%;
             }
             
             .popup h2 {
               margin-top: 0;
               color: #333;
               font-family: Tahoma, Arial, sans-serif;
             }
            </style>
            
            <div class="popup">
		      <h2>Thank you for your comment</h2>
            </div>
	
   
   
   
   
   
   `




    }else{



        document.getElementById("comDesplayer").innerHTML=`
   
   

        <style>
                 .popup {
                    margin: auto;
                    padding: 0px;
                    background: #fff;
                    border-radius: 5px;
                    width: 50%;
                    position: relative;
                    transition: all 5s ease-in-out;
                 
                  }
                  .loaderr{
                      width:50px;
                      height:50px;
                      display:flex;
                      margin-left:42%;
                  }
                  
                  .popup h2 {
                    margin-top: 0;
                    color: #333;
                    font-family: Tahoma, Arial, sans-serif;
                  }
                 </style>
                 
                 <div class="popup">
                   <h2>Ooops, something went wrong</h2>
                 </div>
         
        
        
        
        
        
        `
     
     




    }


})}

setTimeout(() => {location.reload()}, 6000);


     

}


//>>>>>>>>>>>>>>>>>>>>>>>>>liking post<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

 const liking = async() => {
    

    loade = document.getElementById("like-btn");
    loade.style.display="none"
    likeLoade = document.getElementById("like-loader");
    likeLoade.style.display="inline";

    let currentPostId  = JSON.parse(localStorage.getItem('currentPostId'));
    articleUrl = `https://my-brand-api-v2.herokuapp.com/api/articles/like/${currentPostId}`


    const likeOptions = {
    
        method: 'PATCH',
        headers: {
         'Content-Type': 'application/json',
         'token': JSON.parse(sessionStorage.getItem('token'))
     
       },
    }



    fetch(`https://my-brand-api-v2.herokuapp.com/api/articles/like/${currentPostId}`, likeOptions)
    
    setTimeout(() => {location.reload()}, 5000);
    

}


let loggedChecker = () =>{

const Options = {
    method: 'GET',
    headers: { 'token': JSON.parse(sessionStorage.getItem('token'))},
 };
  
 
 fetch('https://my-brand-api-v2.herokuapp.com/api/user/validite', Options)
 
 
          
 .then(response => {
//  .then(data => {console.log(data)
console.log(response.status)
 
 if(response.status ==400 ){
    const removeComment = document.querySelector(".comment-section");
    removeComment.style.display="none"
    console.log("working")
 
 
}})


}












// let CurrentUser = JSON.parse(localStorage.getItem('currentLoggedIn'));
// commenter = CurrentUser.storedUserName;
// console.log("gggggggggg",CurrentUser)


// let createCommet = () => {
//    //key generator

// // first part of the key

// let keySectionOne = Math.floor(Math.random() * (9000000-100000)+100000);
// // second part of the key
// let alpha = ["a","b","c","d"];
// let as = Math.floor(Math.random()*(3-0)+0)
// let keySectionTwo = alpha[as]
// // third part of the key

// let keySectionThree = Math.floor(Math.random() * (90-10)+10);
// //final key

// let key = `${keySectionOne}${keySectionTwo}${keySectionThree}`;



//end of key generator




//     commenterBody =  document.getElementById("commentBody").value;
//      singleComment = {
//         commenterName: `${commenter}`,
//         commenterBody: `${commenterBody}`,
//         type:`comment`,
//         parentPost:fID
        
//      } 
//  localStorage.setItem(key, JSON.stringify(singleComment))
//  location.reload()
//     }

///////////////////////end of comment creation\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

async function fullPost(){
    loggedChecker()
    loader = document.getElementById("Loader");
loader.innerHTML = `


<style>
.loader{
   display:flex;
   margin:auto;
}
</style>
<img src="../images/Spinner.gif" class="loader">
`
    let currentPostId  = JSON.parse(localStorage.getItem('currentPostId'));
    articleUrl = `https://my-brand-api-v2.herokuapp.com/api/articles/${currentPostId}`
    let response = await fetch(articleUrl)
    const SinglePost = await response.json();
    // console.log(SinglePost);
    
    


 let displayer = document.getElementById("hhh");

// full article variables

 let title = SinglePost.articles.title;
 let img   = SinglePost.articles.ImageLink;
 let articleBody = SinglePost.articles.articleBody;
    //  Comments = arr.Comments;
     like = SinglePost.articles.likes.length;
//  let type = arr.type;
// console.log("musenyeri"+like)

fullarticle = `


    <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Roboto:wght@100&family=Rubik:wght@400;500&display=swap');
*{
    font-family: 'Roboto', sans-serif;;
    font-weight: 600;
}

body{
    background-color: #EDF5FA;
}
.blog-container{
    width: 50%;
    height: auto;
    min-height: 40px;
    background-color: white;
    border-radius: 19px;
    margin: auto;
    margin-top: 50px; 
    margin-bottom: 150px;
    box-shadow: 1px 1px 8px 2px #888888;
}

.title-container{
    width: 100%;
    height: 300px;
    background-color: #3A5768;
}
.article-container{
    width: 50%;
    height: 100%;
    background-color: white;
    border-radius: 19px;
    margin: auto;
    margin-top: -250px;
    margin-bottom: 150px;
    box-shadow: 1px 1px 8px 2px #888888;
}
.article-title-section{
    background-color: #5792F5;
    width: 100%;
    height: 80px;
    border-top-left-radius: 19px;
    border-top-right-radius: 19px;
    overflow-wrap: break-word;
}
.article-title{
    text-align: center;
    color: white;
    font-size: 20px;
    padding-top: 30px;
}
.post-container{
    border: 1px solid black;
    width: 95%;
    height: 350px;
    margin: auto;
    margin-top: 4px;
}
.feature-img-container{
    width: 97%;
    height: 95%;
   /* border: 1px solid black;*/
    margin: auto;
    margin-top: 7px;
}
.img5{
    width: 100%;
    height: 100%;
}
.post-title{
    font-size: 20px;
    padding-left: 5px;
    margin-top: -.1px;
}
.post-body{

   /*border: 1px solid black;*/
    font-size:12px
    width: 95%;
    height: auto;
    margin: auto;
    margin-top: 4px;
}
.post-text{
    font-size:14px;
    padding-left:8px;
    
}
.like-btn{
    width: 20px;
    height: 20px;
}
#like-loader{
    display:none;
    width: 20px;
    height: 20px;
    
}
.reaction{
    background-color:#EDF5FA;
    width: 150px;
    text-align: center;
    border-radius: 9px;
}
.like-counter{
    font-size:x-small;
}
.comment-section{
     /*  border: 1px solid black; */
       width: 95%;
       height: 320px;
       margin: auto;
       margin-top: 4px;
       background-color: #EDF5FA;
       border-radius: 19px;

}
.comment-box-title{
       text-align: center;
       padding-top: 2px;
}
.comment-items{
    margin-left: 20%;
    width: 60%;

}
.comment-btn{
    margin-top: 9px;
    background-color: #5792F5;
    color: white;
    width: 30%;
    border-radius: 4px;
    border: none;
    outline: none;
    font-size: 15px;
}
.comment-btn:hover{
 background-color:#276ce4;
}


.ali{
    height: 13%;
}
.setcolor{
    background-color: white;
    border-radius: 4px;
    border: none;
    outline: none;
}
.comment-container{
    width: 95%;
    height: auto;
    margin: auto;
    margin-top: 4px;
    background-color: #EDF5FA;
    border-radius: 19px;
}
.sendName{
    background-color: white;
    width: 30%;
    height: 40px;
    border-radius: 19px 60px 9px 9px;
    margin-left: 10px;
    margin-top: -30px;
    margin-bottom: 2px;
}
#sendName{
    text-align: center;
    font-size: large;
    display:flex;
    justify-content:space-evenly;
    align-items: center;
    padding-top:6px
}
.commentBody{
    background-color: white;
    width: 96%;
    margin: auto;
    font-weight: 0px;
    border-radius: 9px;
    padding: 1px;
}
.reaction-box{
    display: flex;
   /* border: 1px solid black;*/
    width: 97%;
    height: 12%;
    margin-top: -9px;
    margin-left: 5px;
}
.reaction-btn, .counter{
    margin-left: 9px;
}
.counter{
    font-size: 15px;
}

@media screen and (max-width: 700px){
    .article-container{
        width: 100%;
    }
    .reaction-box{
        margin-top: -23px;
    }


}



@media screen and (max-width: 500px){
    .article-container{
        width: 100%;
    }
    .reaction-box{
        margin-top: -23px;
    }

}


@media screen and (max-width: 360px){
    .article-container{
        width: 100%;
        height: 900px;
    }
    .reaction-box{
        margin-top: -22px;
    }

}
    </style>
    <div class="article-container" id="">
    <div class="article-title-section"><p class="article-title">${JSON.parse(title)}</p></div>

    <div class="post-container">
        <div class="feature-img-container">
           <img src="${JSON.parse(img)}" alt="featured image" class="img5">
        </div>
    </div>
    <div class="post-body">
        <p class="post-text">${JSON.parse(articleBody)}</p>

        <div class="reaction">
          Reaction: <img src="../images/like.svg" alt="like" class="like-btn reaction-btn" onclick="liking()" id="like-btn">
          <img src="../images/Spinner.gif" alt="like" class="like-btn reaction-btn" onclick="liking()" id="like-loader">
           <span class="like-counter">${like}</span>
      </div>
    </div>
    <!-- <div class="reaction">
        reaction: <img src="../images/sp.svg" alt="like" class="like-btn reaction-btn" onclick="liking()" id="like-btn"> <span class="like-counter">${2+3}</span>
    </div> -->
    <div class="comment-section">
        <p class="comment-box-title">Leave a comment</p>
        <label for="comment" class="comment-items">Comment:</label><br/>
        <textarea name="" id="commentBody" cols="30" rows="8" class="comment-items setcolor"></textarea><br/>
     <!--   <label for="name" class="comment-items">Name:</label><br/>
        <input type="text" name="name" id="commenterName" class="comment-items ali setcolor" ><br/>
        <label for="email" class="comment-items">Email:</label><br/>
        <input type="email" name="email" id="commenterEmail" class="comment-items ali setcolor" disabled><br/> -->
        <input type="submit" value="Submit" class="comment-items comment-btn ali" id="postComment" onclick="createCommet()" >
        <p id="comDesplayer"></p>

    </div>
    <div id="kk">
<!--<div class="comment-container"><br/>
      <div class="sendName">
          <p id="sendName">Honore</p>
      </div>
      <div class="commentBody">
          <p id="commentBody2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
      </div><br/>-->
</div>
  </div>
<br/>


    </div>
   <!--duplicate-->


    </div>

`
loader.style.display="none"
displayer.innerHTML += `${fullarticle}`;
fetchingCommet()



}


fullPost()




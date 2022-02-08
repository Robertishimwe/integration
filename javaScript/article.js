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
    let currentPostId  = JSON.parse(localStorage.getItem('currentPostId'));
    articleUrl = `https://my-brand-api-v2.herokuapp.com/api/articles/${currentPostId}`
    let response = await fetch(articleUrl)
    const SinglePost = await response.json();
    console.log(SinglePost);
    



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
    width: 95%;
    height: auto;
    margin: auto;
    margin-top: 4px;
}
.like-btn{
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
    font-size: x-large;
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
    <div class="article-title-section"><p class="article-title">${title}</p></div>

    <div class="post-container">
        <div class="feature-img-container">
           <img src="${img}" alt="featured image" class="img5">
        </div>
    </div>
    <div class="post-body">
        <p>${articleBody}</p>

        <div class="reaction">
          Reaction: <img src="../images/like.svg" alt="like" class="like-btn reaction-btn" onclick="liking()" id="like-btn"> <span class="like-counter">${like}</span>
      </div>
      <p>hello</p>

    </div>
    <!-- <div class="reaction">
        reaction: <img src="../images/like.svg" alt="like" class="like-btn reaction-btn" onclick="liking()" id="like-btn"> <span class="like-counter">${2+3}</span>
    </div> -->
    <div class="comment-section">
        <p class="comment-box-title">Leave a comment</p>
        <label for="comment" class="comment-items">Comment:</label><br/>
        <textarea name="" id="commentBody" cols="30" rows="8" class="comment-items setcolor"></textarea><br/>
     <!--   <label for="name" class="comment-items">Name:</label><br/>
        <input type="text" name="name" id="commenterName" class="comment-items ali setcolor" ><br/>
        <label for="email" class="comment-items">Email:</label><br/>
        <input type="email" name="email" id="commenterEmail" class="comment-items ali setcolor" disabled><br/> -->
        <input type="submit" value="Submit" class="comment-items comment-btn ali" onclick="createCommet()" >

    </div>
    <div class="kk">
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
displayer.innerHTML += `${fullarticle}`;
}

// like function
const liking = () => {


    let currentPostId  = JSON.parse(localStorage.getItem('currentPostId'));
    articleUrl = `https://my-brand-api-v2.herokuapp.com/api/articles/like/${currentPostId}`


   const UserRequestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },

    };
    fetch(articleUrl, UserRequestOptions)

          
    .then(response => response.json())
    .then(data => {console.log(data)})



}





// let myID = localStorage.getItem("currentPostId");
// let reg = /\d+(\w)\d+/
// let myID3 = myID.match(reg);
// let fID = myID3[0];
// console.log("you made it bro:"+fID)


// function liking(){
//     for(let i=0;i<localStorage.length;i++){
//         let key = localStorage.key(i)
//         // console.log(key)




//     //let displayer = document.getElementById("hhh");
//     let arr = JSON.parse(localStorage.getItem('currentPost'))
//     let title = arr.titleInfo;
//     let img   = arr.imgUrlInfo;
//     let Comments = arr.Comments;
//     let like = parseInt(arr.likes);
//     let fullArticle = arr.fullArticleInfo;




//     let articleData = {
//             titleInfo: `${title}`,
//             fullArticleInfo: `${fullArticle}`,
//             imgUrlInfo: `${img}`,
//             Comments:Comments,
//             type:`posts`,
//             likes:like+1,
//         }
//         console.log(Comments)
// console.log("hello"+articleData)

//         localStorage.setItem(fID, JSON.stringify(articleData))
//         location.reload();
//         fullPost();

//     }
// }

// //end of liking operation

fullPost()


const createCommet = async () => {
let currentPostId  = JSON.parse(localStorage.getItem('currentPostId'));
articleUrl = `https://my-brand-api-v2.herokuapp.com/api/articles/${currentPostId}`

let response = await fetch(articleUrl)
    const Commentdisplayer = document.querySelector(".kk");
    const SinglePost = await response.json();
    const setOfComments = SinglePost.articles.Comments;

    for(let i=0;i<setOfComments.length;i++){
        console.log(setOfComments[i])




    let commmentTemplete = `
      <div class="comment-container"><br/>
            <div class="sendName">
                <p id="sendName">${setOfComments[i].USERNAME}</p>
            </div>
            <div class="commentBody">
                <p id="commentBody">${setOfComments[i].COMMENT} </p>
            </div><br/>
    
        </div>
      
      
      `
      Commentdisplayer.innerHTML += commmentTemplete;



}
}

// fullPost()


// function commmenting(){

//     for(let i=0;i<localStorage.length;i++){
//         key = localStorage.key(i)
//        console.log(key)


//    let Commentdisplayer = document.querySelector(".kk");
//    let arr = JSON.parse(localStorage.getItem(key))
//    let commenterName = arr.commenterName;
//    let commentBody   = arr.commenterBody;
//    let parentPost = arr.parentPost;
//    let type = arr.type;
//    //  let reg = "/\d{7-6}\w*\d{2}/";
//    //  let answer = key.test(r);
//    //  console.log(answer)



//    if(type == `comment` && fID == parentPost) {

//   let commmentTemplete = `
//   <div class="comment-container"><br/>
//         <div class="sendName">
//             <p id="sendName">${commenterName}</p>
//         </div>
//         <div class="commentBody">
//             <p id="commentBody">${commentBody} </p>
//         </div><br/>

//     </div>
  
  
//   `
//   Commentdisplayer.innerHTML += commmentTemplete;



//    }


// }

// }
// commmenting();






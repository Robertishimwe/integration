
let viewPost=(postId)=>{
//   console.log("mee:"+postId);
//   console.log("hello world");
let Posting = localStorage.getItem(postId);
localStorage.setItem("currentPost",Posting)
localStorage.setItem("currentPostId",JSON.stringify(postId))
console.log("robert:"+Posting)
 location = "../html/fullArticle.html";
}


async function blogFetch(){
let response = await fetch("https://my-brand-api-v2.herokuapp.com/api/articles")
const allPosts = await response.json();
console.log(allPosts);

//looping through
for(let i=0;i<allPosts.length;i++){
//     key = localStorage.key(i)
//    console.log(key)



    // for(let i=0;i<localStorage.length;i++){
    //      key = localStorage.key(i)
    //     console.log(key)


      let displayer = document.getElementById("hhh");
    // let arr = JSON.parse(localStorage.getItem(key))
    let arr = allPosts[i];
    let title = arr.title;
    let img   = arr.ImageLink;
    let articleBody = arr.articleBody;
    let comments = arr.comments;
    let like = parseInt(arr.likes);
    let type = arr.type;
    //  let reg = "/\d{7-6}\w*\d{2}/";
    //  let answer = key.test(r);
    //  console.log(answer)



  if(1>0) {


    //function liking(){
        // let articleData = {
        //     titleInfo: `${title}`,
        //     fullArticleInfo: `${fullArticle}`,
        //     imgUrlInfo: `${img}`,
        //     type:`posts`,
        //     likes:`${like+1}`,
        // }

        // localStorage.setItem(key, JSON.stringify(articleData))

    //}








let myKey =await arr._id ;




    let temp = `
    <div class="post-container post1" id= '${myKey}' onclick="viewPost('${myKey}')">
    <div class="feature-img-container">
     <img src="${img}" alt="featured image" class="img5" onclick="viewPost(${myKey})>
    </div>
    <p class="post-title" contenteditable="false">${title}</p>
    <div class="reaction-box">
        <img src="../images/like.svg" alt="like" class="like-btn reaction-btn" onclick="liking()" id="like-btn">
        <p class="like-counter counter">${like}</p>
        <img src="../images/comment.svg" alt="comment" class="comment-btn reaction-btn">
        <p class="comment-counter counter" id="kk">0</p>

    </div>
    `
    displayer.innerHTML += temp;
    // displayer.innerHTML += temp;













console.log("dsds ");

















    // fullarticle = `


//     <style>
//     @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Roboto:wght@100&family=Rubik:wght@400;500&display=swap');
//
// *{
//     font-family: 'Roboto', sans-serif;;
//     font-weight: 600;
// }
//
// body{
//     background-color: #EDF5FA;
// }
//
// .title-container{
//     width: 100%;
//     height: 300px;
//     background-color: #3A5768;
// }
// .article-container{
//     width: 100%;
//     height: auto;
//     background-color: white;
//     border-radius: 19px;
//     margin: auto;
//     margin-top: -150px;
//     margin-bottom: 150px;
//     box-shadow: 1px 1px 8px 2px #888888;
// }
// .article-title-section{
//     background-color: #5792F5;
//     width: 100%;
//     height: 80px;
//     border-top-left-radius: 19px;
//     border-top-right-radius: 19px;
// }
// .article-title{
//     text-align: center;
//     color: white;
//     font-size: 20px;
//     padding-top: 30px;
// }
// .post-container{
//     border: 1px solid black;
//     width: 95%;
//     height: 350px;
//     margin: auto;
//     margin-top: 4px;
// }
// .feature-img-container{
//     width: 97%;
//     height: 95%;
//    /* border: 1px solid black;*/
//     margin: auto;
//     margin-top: 7px;
// }
// .img5{
//     width: 100%;
//     height: 100%;
// }
// .post-title{
//     font-size: 20px;
//     padding-left: 5px;
//     margin-top: -.1px;
// }
// .post-body{
//
//    /*border: 1px solid black;*/
//     width: 95%;
//     height: auto;
//     margin: auto;
//     margin-top: 4px;
// }
// .like-btn{
//     width: 20px;
//     height: 20px;
// }
// .reaction{
//     background-color:#EDF5FA;
//     width: 150px;
//     text-align: center;
//     border-radius: 9px;
// }
// .like-counter{
//     font-size:x-small;
// }
// .comment-section{
//      /*  border: 1px solid black; */
//        width: 95%;
//        height: 320px;
//        margin: auto;
//        margin-top: 4px;
//        background-color: #EDF5FA;
//        border-radius: 19px;
//
// }
// .comment-box-title{
//        text-align: center;
//        padding-top: 2px;
// }
// .comment-items{
//     margin-left: 20%;
//     width: 60%;
//
// }
// .comment-btn{
//     margin-top: 9px;
//     background-color: #5792F5;
//     color: white;
//     width: 30%;
//     border-radius: 4px;
//     border: none;
//     outline: none;
//     font-size: 15px;
// }
// .comment-btn:hover{
//  background-color:#276ce4;
// }
//
//
// .ali{
//     height: 13%;
// }
// .setcolor{
//     background-color: white;
//     border-radius: 4px;
//     border: none;
//     outline: none;
// }
// .comment-container{
//     width: 95%;
//     height: auto;
//     margin: auto;
//     margin-top: 4px;
//     background-color: #EDF5FA;
//     border-radius: 19px;
// }
// .sendName{
//     background-color: white;
//     width: 30%;
//     height: 40px;
//     border-radius: 19px 60px 9px 9px;
//     margin-left: 10px;
//     margin-top: -30px;
//     margin-bottom: 2px;
// }
// #sendName{
//     text-align: center;
//     font-size: x-large;
// }
// .commentBody{
//     background-color: white;
//     width: 96%;
//     margin: auto;
//     font-weight: 0px;
//     border-radius: 9px;
//     padding: 1px;
// }
// .reaction-box{
//     display: flex;
//    /* border: 1px solid black;*/
//     width: 97%;
//     height: 12%;
//     margin-top: -9px;
//     margin-left: 5px;
// }
// .reaction-btn, .counter{
//     margin-left: 9px;
// }
// .counter{
//     font-size: 15px;
// }
//
// @media screen and (max-width: 700px){
//     .article-container{
//         width: 60%;
//     }
//     .reaction-box{
//         margin-top: -23px;
//     }
//
//
// }
//
//
//
// @media screen and (max-width: 500px){
//     .article-container{
//         width: 70%;
//     }
//     .reaction-box{
//         margin-top: -23px;
//     }
//
// }
//
//
// @media screen and (max-width: 360px){
//     .article-container{
//         width: 80%;
//         height: 900px;
//     }
//     .reaction-box{
//         margin-top: -22px;
//     }
//
// }
//     </style>
//     <div class="article-container">
//     <div class="article-title-section"><p class="article-title">${arr.titleInfo}</p></div>
//
//     <div class="post-container">
//         <div class="feature-img-container">
//            <img src="${img}" alt="featured image" class="img5">
//         </div>
//     </div>
//     <div class="post-body">
//         <p>${articleBody}</p>
//
//         <div class="reaction">
//           Reaction: <img src="../images/like.svg" alt="like" class="like-btn reaction-btn" onclick="liking()" id="like-btn"> <span class="like-counter"></span>
//       </div>
//
//     </div>
//     <!-- <div class="reaction">
//         reaction: <img src="../images/like.svg" alt="like" class="like-btn reaction-btn" onclick="liking()" id="like-btn"> <span class="like-counter">${like}</span>
//     </div> -->
//     <div class="comment-section">
//         <p class="comment-box-title">Leave a comment</p>
//         <label for="comment" class="comment-items">Comment:</label><br/>
//         <textarea name="" id="" cols="30" rows="4" class="comment-items setcolor"></textarea><br/>
//         <label for="name" class="comment-items">Name:</label><br/>
//         <input type="text" name="name" id="name" class="comment-items ali setcolor"><br/>
//         <label for="email" class="comment-items">Email:</label><br/>
//         <input type="email" name="email" id="email" class="comment-items ali setcolor"><br/>
//         <input type="button" value="Submit" class="comment-items comment-btn ali">
//
//     </div>
//
//   <div class="comment-container"><br/>
//       <div class="sendName">
//           <p id="sendName">Honore</p>
//       </div>
//       <div class="commentBody">
//           <p id="commentBody">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
//       </div><br/>

//   </div>
// <br/>
//
//
//     </div>
//    <!--duplicate-->
//
//
//     </div>

    // `

}

    }
}
blogFetch();

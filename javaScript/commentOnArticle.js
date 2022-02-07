function commmenting(){

    for(let i=0;i<localStorage.length;i++){
        key = localStorage.key(i)
       console.log(key)


   let Commentdisplayer = document.querySelector(".kk");
   let arr = JSON.parse(localStorage.getItem(key))
   let commenterName = arr.commenterName;
   let commentBody   = arr.commenterBody;
   let parentPost = arr.parentPost;
   let type = arr.type;
   //  let reg = "/\d{7-6}\w*\d{2}/";
   //  let answer = key.test(r);
   //  console.log(answer)



   if(type == `comment`) {

  let commmentTemplete = `
  <div class="comment-container"><br/>
        <div class="sendName">
            <p id="sendName">${commenterName}</p>
        </div>
        <div class="commentBody">
            <p id="commentBody">${commentBody} </p>
        </div><br/>

    </div>
  
  
  `
  Commentdisplayer.innerHTML += commmentTemplete;



   }


}
}
commmenting();
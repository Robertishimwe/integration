document.querySelector("body").innerHTML = `<img src="../images/Spinner.gif" alt="loading...">`
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Sending request to the server<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const Options = {
   method: 'GET',
   headers: { 'token': JSON.parse(sessionStorage.getItem('token'))},
};


fetch('https://my-brand-api-v2.herokuapp.com/api/user/validite', Options)


         
.then(response => response.json())
.then(data => {console.log(data)
if(data.Admin_validite == true){
    document.querySelector("body").innerHTML = `
    
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/control_panel.css">
    <link rel="shortcut icon" href="../images/logo3ff.svg" type="image/x-icon">
    <title>Control panel</title>
</head>
<body>
  <menu-bar></menu-bar>
     <div class="container">
         <div class="sideMenu">
            <table>
            <tr><td onclick="profile()">Profile</td></tr>
            <tr><td onclick="messageListe()">Message</td></tr>
            <tr><td onclick="articleListe()">Articles liste</td></tr>
            <tr><td onclick="newArticle()">New article</td></tr>
            <tr><td onclick="subscription()">Subscriptions</td></tr>
            <tr><td onclick="locations()">Traffic Source</td></tr>
            </table>  
          </div>
          <div class="objectContainer" id="board"></div>



        </div>
    

    
</body>
</html>
    
    
    
    
    
    `

}else{
    document.querySelector("body").innerHTML = `<img src="../images/image5.jpg" alt="loading...">`
}
   
})
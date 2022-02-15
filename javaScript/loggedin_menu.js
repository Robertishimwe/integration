document.querySelector("body").innerHTML = `

<img src="../images/Spinner.gif" alt="loading..." class="loaderIMG">

`
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Sending request to the server<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const Options = {
   method: 'GET',
   headers: { 'token': JSON.parse(sessionStorage.getItem('token'))},
};


fetch('https://my-brand-api-v2.herokuapp.com/api/user/validite', Options)


         
.then(response => response.json())
.then(data => {console.log(data)
if(data.User_validite == true){
    document.querySelector(".menu_bar2").innerHTML = `
    WELCOME
`}else{

    document.querySelector(".menu_bar2").innerHTML = `
    no WELCOME
`

}})
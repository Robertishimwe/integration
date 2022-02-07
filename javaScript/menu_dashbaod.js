const menuTemplate = document.createElement("template");
menuTemplate.innerHTML = `

<style>


@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');


.nav {
    display: flex;
    justify-content:space-between;
    left: 0;
    top: 0;
    position: fixed;
    width: 100%;
    height: 90px;
    background-color:white;
    z-index: 9;
}

#logo{
    cursor: pointer;
    width:70%
}
.home_burger {
    display: none;
    width: 50px;
}
.menu-liste{
    align-items: center;
    width: 100%;
    display: flex;
    justify-content:space-evenly;
    list-style: none;
    color: #1D53AE;
    font-weight: bolder;
    font-size: 22px;
    right: 100px;
    font-family: 'Roboto', sans-serif;
   /* border: 1px solid black; */
    
}
ul li a:hover{
text-decoration: underline;

}
.menu{
    display: flex;
    justify-content: flex-start;
    width: 60%;
   /* border: 1px solid black; */
    height: 100%;
   
}
.login{
    border: 1px solid #1D53AE;
    border-radius: 36px;
    padding: .7em 1.6em;
}
ul li a{
    text-decoration: none;
    color:#1D53AE;
    cursor: pointer;
}
.loginBtn{

    text-decoration: none;
    color:#1D53AE;
    cursor: pointer;
}
.loginBtn:hover{
    background-color:#1D53AE;
    color: white;
    border-radius: 36px;
    transition:.9s;
    
}

@media screen and (max-width: 1000px){
    .home_burger {
        display: block;
        width: 50px;
        margin-right: 2rem;
        margin-top: 4%;
    }
  
    
    .menu {
        display: none;
    }
    
}


@media screen and (max-width: 500px){
#logo {
    width: 230px;
    margin-top: 3%;
}



</style>


<div class="nav">
        <div class="logo"><a href="../index.html"><img src="../images/logo head.png" alt="logo" id="logo"></a></div>
        <div class="menu">
            <ul class="menu-liste">
                <li><a href="../index.html">Home</a></li>
                <li><a href="../html/aboutMe.html">About me</a></li>
                <li><a href="../index.html#skills-section">Skills</a></li>
                <li><a href="../index.html#projects">Project</a></li>
                <li><a href="../html/blogTest.html">Blog</a></li>
                <a href="../index.html" class="loginBtn"> <li class="login">Logout</li> </a>
            </ul>
        </div>

           <img src="../images/icons8-menu.svg" alt="home-burge" class="home_burger">
    </div>


`;

class menu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(menuTemplate.content.cloneNode(true));
    }
}


window.customElements.define('menu-bar',menu);
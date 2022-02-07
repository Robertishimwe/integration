const footertemplate = document.createElement("template");
footertemplate.innerHTML = `

<style>


/*end of contact*/
.footer{
    width: 100%;
    height: 320px;
    display: flex;
    justify-content: space-evenly;
    background-color:#3A5768;
    /*margin-top:200px;*/
}
.footer-content{
    margin-top: 30px;
    width: 20%;
    height: 250px;
   
}
.footer-logo{
  height: 100%;
}
.footer-titles{
    color: white;
    font-size: 25px;
}

#email2{
    width: 70%;
    height: 27px;
    border: none;
    outline: none;
    


}
.subscribe{
    width: 40%;
    height: 29px;
    font-size: 20px;
    background-color:#1D53AE;
    color:white;
    border: none;
    cursor: pointer;
    margin-top: 4px;
    

}
.subscribe:hover{
    background-color: #035bf3f6;
    color: white;
}
.footer-liste{
    color: white;
    list-style: none;
    font-weight:normal;
    font-size: 15px;
    margin-left: -40px;
    
}


@media screen and (max-width: 500px){

.footer{
    width: 100%;
    height: 520px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    background-color:#3A5768;
    margin: auto;
    
    
}
.footer-content{
    margin: auto;
    width: 60%;
}
.footer-content-1{
    display: none;
}
}

</style>




<div class="footer">

<div class="footer-content footer-content-1">
    <img src="../images/logo3-1-1@2x.png" alt="logo" class="footer-logo">
</div>

<div class="footer-content">
    <p class="footer-titles">Address</p>

        <ul class="footer-liste">
            <li>Kigali,</li>
            <li>Nyarugenjye</li>
            <li>Nyakabanda</li>
            <li>KN 193 ST</li>
        </ul>

</div>
<div class="footer-content">
    <p class="footer-titles">Contact Me</p>

    <ul class="footer-liste">
        <li>Tel: +250787885197</li>
        <li>robertishimwe0@gmail.com</li>

    </ul>
</div>



<div class="footer-content">
    <p class="footer-titles">Newsletter</p>

    <form action="#" method="get"class="Newsletter-form">
        <input type="email" name="email2" id="email2"><br/>
        <input type="submit" class="subscribe" value="Subscribe">

    </form>
</div>

</div>




`;

class footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(footertemplate.content.cloneNode(true ));
    }
}


window.customElements.define('footer-bar',footer);
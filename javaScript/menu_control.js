
let homeicon = () => {
    let homeBurger = document.querySelector(".home_burger");
    let homeClose = document.querySelector(".home_close");
    let menuList = document.querySelector(".menu");

    homeBurger.style.display="none";
    menuList.style.display="block";
    homeClose.style.display="block";


}

let homeClose = () => {
    let homeBurger = document.querySelector(".home_burger");
    let homeClose = document.querySelector(".home_close");
    let menuList = document.querySelector(".menu");

    homeBurger.style.display="block";
    homeClose.style.display="none";
    menuList.style.display="none";


}
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    user.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    user.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    user.classList.remove('active');
}
let user = document.querySelector('.user');

document.querySelector('#user-btn').onclick = () =>{
    user.classList.toggle('active');
    cartItem.classList.remove('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    user.classList.remove('active');
}
var popup = document.getElementById("popup");

var showPopup = function() {
popup.style.display = "block";

};

var hidePopup = function() {
popup.style.display = "none";
};

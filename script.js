var burger = document.querySelector('#burger');
var menuList = document.querySelector('.main__menu');
var btnClose = document.querySelector('#close');

function openBurger(){
    burger.style.display = 'none';
    menuList.classList.add('show');
    btnClose.style.display = 'block';
}

function closeBurger(){
    burger.style.display = 'block';
    menuList.classList.remove('show');
    btnClose.style.display = 'none';
}

burger.onclick = openBurger;
btnClose.onclick = closeBurger;
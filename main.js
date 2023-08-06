const menuMail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');


menuMail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside(){
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isAsideClosed = aside.classList.contains('inactive');

    if(!ismobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if(isAsideClosed){
        //abrir el aside
       
    }
    else{
        aside.classList.add('inactive');
    }
    /*aside.classList.toggle('inactive');*/
    if(mobileMenu.classList.contains('inactive'));

}
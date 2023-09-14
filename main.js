const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

//forma 1, completa

//navEmail.addEventListener('click', toggleDesktopMenu);
/* function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
} */

//forma 2, con arrow function anonima

/* navEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive');
}) */


//forma 3, con arrow function definida
//esta seria la mejor practica porque si se debe remover el evento al ser anonimo no se puede hacer, en este caso primero se debe inicializar la funcion por hoisting

const toggleDesktopMenu = () => {
  //desktopMenu.classList.toggle("inactive");
  const isAsideMenuClosed = aside.classList.contains('inactive');

  if(!isAsideMenuClosed){
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");


};

navEmail.addEventListener("click", toggleDesktopMenu);

const toggleMobileMenu = () => {
  //mobileMenu.classList.toggle("inactive");

  const isAsideMenuClosed = aside.classList.contains('inactive');

  if(!isAsideMenuClosed){
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
};

menuHamIcon.addEventListener("click", toggleMobileMenu);

//funcion para que los menus no se sobrepongan
//no se realiza con arrow function para que sea como en la clase

menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleCarritoAside(){
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    aside.classList.toggle("inactive");   
}






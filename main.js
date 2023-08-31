const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

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
  desktopMenu.classList.toggle("inactive");
};

navEmail.addEventListener("click", toggleDesktopMenu);

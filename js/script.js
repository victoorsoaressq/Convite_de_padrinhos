let navbar = document.querySelector('header');
let headerLogo = document.querySelector('#logo')
let headerA1 = document.querySelector('#a1')
let headerA2 = document.querySelector('#a2')
let headerA3 = document.querySelector('#a3')
let headerA4 = document.querySelector('#a4')
let navColor = document.querySelector('.nav-list')
let line1 = document.querySelector('.line1')
let line2 = document.querySelector('.line2')
let line3 = document.querySelector('.line3')


document.addEventListener("scroll", function () {
    let posicaoy = window.pageYOffset;

    navbar.style.backgroundColor = posicaoy == 0 ? "transparent" : "white";
    navbar.style.boxShadow = posicaoy == 0 ? "none" : "2px 2px 5px rgba(0, 0, 0, 0.144)";
    headerLogo.style.color = posicaoy == 0 ? "#fff" : "#6da2bf";
    headerA1.style.color = posicaoy == 0 ? "#fff" : "#6da2bf";
    headerA2.style.color = posicaoy == 0 ? "#fff" : "#6da2bf";
    headerA3.style.color = posicaoy == 0 ? "#fff" : "#6da2bf";
    headerA4.style.color = posicaoy == 0 ? "#fff" : "#6da2bf";
    navColor.style.backgroundColor = posicaoy == 0 ? "#6da2bf" : "#fff";
    line1.style.backgroundColor = posicaoy == 0 ? "#fff" : "#6da2bf";
    line2.style.backgroundColor = posicaoy == 0 ? "#fff" : "#6da2bf";
    line3.style.backgroundColor = posicaoy == 0 ? "#fff" : "#6da2bf";
});
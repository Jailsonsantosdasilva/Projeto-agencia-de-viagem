let btnNav = document.querySelector(".btnBars");
let nav = document.querySelector(".nav");
let btnIcon = btnNav.querySelector("i");
let link = nav.querySelectorAll("a");

btnNav.addEventListener("click", ()=>{
    nav.classList.toggle("open")
        btnIcon.classList.toggle("fa-bars")
        btnIcon.classList.toggle("fa-xmark")
})


link.forEach(link =>{
    link.addEventListener("click", ()=>{
        nav.classList.remove("open")
        btnIcon.classList.add("fa-bars")
        btnIcon.classList.remove("fa-xmark")
    })
})


window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 2000,
    interval: 500,
}

ScrollReveal().reveal(".logo", {
    ...scrollRevealOption,
    delay: 1500,
    origin: "left",
    distance: "400px",
})

ScrollReveal().reveal(".nav a", {
    ...scrollRevealOption,
    delay: 1800,
    origin: "top",
    interval: 500,
})

ScrollReveal().reveal(".main-box", {
    ...scrollRevealOption,
    delay: 2500,
    origin: "left",
    distance: "400px",
})

  AOS.init();
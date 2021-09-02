// adding class sticky to header when window is scrolled
window.addEventListener("scroll", function(){
    let header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>20);
})

// function for controls of hamburger menu
function toggleMenu() {
    let hamburger = document.querySelector(".hamburger");
    let navbar  = document.querySelector('.navbar')
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
}
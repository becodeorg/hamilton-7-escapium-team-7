// tmp


///////Nav menu

const menuHamburger = document.querySelector(".navigation__burger");
const bars = document.querySelectorAll(".bar");
const navLinks = document.querySelector(".navigation__ul");

menuHamburger.addEventListener('click',()=>{
    menuHamburger.classList.toggle("active");
    bars[0].classList.toggle('nav-open');
    bars[1].classList.toggle('nav-open');
    bars[2].classList.toggle('nav-open');
    navLinks.classList.toggle('sidebar');
    })

///Remove navbar when cliking a link inside of it, to be checked

        // document.querySelectorAll("li").forEach(n => n.addEventListener("click", () => {
        //     menuHamburger.classList.remove("active");
        //     navLinks.classList.remove('sidebar');
        //     logo.classList.remove('logo');
        //     line.style.display= "block";
        // }
        // ))


////FAQ

const question = document.querySelectorAll(".about__FAQ-question");
const answer = document.querySelectorAll(".about__FAQ__answer");

question[0].addEventListener("click", () => {
    answer[0].classList.toggle ("shown");
})

question[1].addEventListener("click", () => {
    answer[1].classList.toggle ("shown");
})
question[2].addEventListener("click", () => {
    answer[2].classList.toggle ("shown");
})
question[3].addEventListener("click", () => {
    answer[3].classList.toggle ("shown");
})
question[4].addEventListener("click", () => {
    answer[4].classList.toggle ("shown");
})
question[5].addEventListener("click", () => {
    answer[5].classList.toggle ("shown");
})

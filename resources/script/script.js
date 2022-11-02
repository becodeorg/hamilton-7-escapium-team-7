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
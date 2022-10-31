// tmp


///////Nav menu

let menuHamburger = document.querySelector(".navigation__burger");
        const bars = document.querySelectorAll(".bar");
        const navLinks = document.querySelector(".navigation__ul");
        const logo = document.querySelector(".navigation__logo");
        const line = document.querySelector(".linethrough");

        console.log(line);
        

        menuHamburger.addEventListener('click',()=>{
        menuHamburger.classList.toggle("active");
        bars[0].classList.toggle('nav-open');
        bars[1].classList.toggle('nav-open');
        bars[2].classList.toggle('nav-open');
        navLinks.classList.toggle('sidebar');
        logo.classList.toggle('logo');
        line.style.display="none";
        })


        document.querySelectorAll("li").forEach(n => n.addEventListener("click", () => {
            menuHamburger.classList.remove("active");
            navLinks.classList.remove('sidebar');
            logo.classList.remove('logo');
            line.style.display= "block";
        }
        ))
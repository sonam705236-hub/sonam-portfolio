/* ==========================
   Loader
========================== */

window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

/* ==========================
   Typed Text
========================== */

var typed = new Typed(".typing", {
    strings: [
        "Python Developer",
        "Full Stack Developer",
        "Cyber Security Enthusiast",
        "Java Developer",
        "Web Designer"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
});

/* ==========================
   AOS Animation
========================== */

AOS.init({
    duration: 1000,
    once: true
});

/* ==========================
   Scroll To Top
========================== */

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        scrollBtn.style.display="flex";
    }else{
        scrollBtn.style.display="none";
    }

});

scrollBtn.onclick=()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

}

/* ==========================
   Dark Mode
========================== */

const theme=document.querySelector(".theme-btn");

theme.onclick=()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

theme.innerHTML='<i class="fas fa-sun"></i>';

}else{

theme.innerHTML='<i class="fas fa-moon"></i>';

}

}

/* ==========================
   Cursor
========================== */

const cursor=document.querySelector(".cursor");

const cursor2=document.querySelector(".cursor2");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

cursor2.style.left=e.clientX+"px";
cursor2.style.top=e.clientY+"px";

});

/* ==========================
 Active Navbar
========================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/* ==========================
 Navbar Background
========================== */

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

header.classList.toggle("sticky",window.scrollY>100);

});

/* ==========================
 Button Hover Effect
========================== */

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-8px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});

/* ==========================
 Project Hover
========================== */

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

/* ==========================
 Contact Form
========================== */

const form=document.querySelector(".contact-form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank You! Your message has been sent successfully.");

form.reset();

});

/* ==========================
 Fade Hero
========================== */

window.addEventListener("scroll",()=>{

let hero=document.querySelector(".hero");

hero.style.opacity=1-window.scrollY/800;

});

/* ==========================
 Console Message
========================== */

console.log("%cWelcome To Sonam Pal Portfolio 🚀","color:#00e5ff;font-size:22px;font-weight:bold;");
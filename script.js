
let h1main= document.querySelectorAll(".h1-main span")

let title_array = Array.from(h1main)

let title_hover=function (e){
    e.addEventListener('mouseenter', function(){
         e.classList.toggle('title-hover');
         e.style.fontFamily="Kbzipadeedoodah";

    setTimeout(() => {
        e.classList.remove('title-hover');
        e.style.fontFamily="Kbdunktank";
    }, 3000);
})
}

for ( let items of title_array){
    title_hover(items);
}


let aboutMe=document.querySelector('.about-me img');
let aboutMe1=document.querySelector('.about-me');
let contact=document.querySelector('.contact img');
let contact1=document.querySelector('.contact');
let projects=document.querySelector('.projects img');
let projects1=document.querySelector('.projects');
let skills=document.querySelector('.skills img');
let skills1=document.querySelector('.skills');

let AM=document.querySelector('.AM');
let CM=document.querySelector('.CM');
let pro=document.querySelector('.pro');
let skl=document.querySelector('.skl');


aboutMe.addEventListener('mousemove',function(e){
    let xAxis =(( window.innerWidth)/5 - e.clientX)/7;
    let yAxis =(( window.innerHeight)/5 - e.clientY)/7;
    aboutMe.style.transform=`rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;

    aboutMe1.style.boxShadow="white .4rem .4rem 1rem";
    contact1.style.boxShadow="none";
    projects1.style.boxShadow="none";
    skills1.style.boxShadow="none";

    AM.style.display="inline-block";
    CM.style.display="none";
    pro.style.display="none";
    skl.style.display="none";

})

aboutMe.addEventListener('mouseout',function(e){
    aboutMe.style.transform=`rotateX(0deg) rotateY(0deg)`;
})



contact.addEventListener('mousemove',function(e){
    let xAxis =(( window.innerWidth)/3 - e.clientX)/4;
    let yAxis =(( window.innerHeight)/3 - e.clientY)/4;

    contact.style.transform=`rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;

    aboutMe1.style.boxShadow="none";
    contact1.style.boxShadow="white .4rem .4rem 1rem";
    projects1.style.boxShadow="none";
    skills1.style.boxShadow="none";

    CM.style.display="inline-block";
    AM.style.display="none";
    pro.style.display="none";
    skl.style.display="none";
})

contact.addEventListener('mouseout',function(e){
    contact.style.transform=`rotateX(0deg) rotateY(0deg)`;
})



projects.addEventListener('mousemove',function(e){
    let xAxis =(( window.innerWidth)/5 - e.clientX)/7;
    let yAxis =(( window.innerHeight)/5 - e.clientY)/7;

    projects.style.transform=`rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;

    aboutMe1.style.boxShadow="none";
    contact1.style.boxShadow="none";
    projects1.style.boxShadow="white .4rem .4rem 1rem";
    skills1.style.boxShadow="none";

    pro.style.display="inline-block";
    CM.style.display="none";
    AM.style.display="none";
    skl.style.display="none";
})

projects.addEventListener('mouseout',function(e){
    projects.style.transform=`rotateX(0deg) rotateY(0deg)`;
})



skills.addEventListener('mousemove',function(e){
    let xAxis =(( window.innerWidth)/5 - e.clientX)/7;
    let yAxis =(( window.innerHeight)/5 - e.clientY)/30;

    skills.style.transform=`rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;

    aboutMe1.style.boxShadow="none";
    contact1.style.boxShadow="none";
    projects1.style.boxShadow="none";
    skills1.style.boxShadow="white .4rem .4rem 1rem";

    skl.style.display="inline-block";
    CM.style.display="none";
    pro.style.display="none";
    AM.style.display="none";
})

skills.addEventListener('mouseout',function(e){
    skills.style.transform=`rotateX(0deg) rotateY(0deg)`;
})


aboutMe.addEventListener('click', function(){
    aboutMe.href="otherpages/about-me/index.html"
})

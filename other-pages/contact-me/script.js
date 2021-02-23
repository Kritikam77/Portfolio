let heading= document.querySelectorAll(".heading5 span")

let title_array = Array.from(heading)

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


let canvas4=document.querySelector('#canvas4')
let ctx=canvas4.getContext('2d');

canvas4.width=document.body.clientWidth;
canvas4.height=document.body.clientHeight;

let array1=['#000','#fff' , '#4c5699','#9acd32'];
let n = array1.length;

let array2=[150,200,250,300,350,400];
let m = array2.length;



let circles = function(){
    let randnumb = array2[Math.trunc(Math.random()*m)]
    for (let i =0 ; i<=randnumb ; i++){
        let x = Math.random()*innerWidth;
    let y = Math.random()*innerHeight;
    let rad = Math.random()*10;
    let randcolor=array1[Math.trunc(Math.random()*n)];
    
    ctx.beginPath();
    ctx.arc(x,y,rad,0,2*Math.PI);
    ctx.strokeStyle="black"
    ctx.stroke();
    ctx.fillStyle="black";
    ctx.fill();
    ctx.shadowColor=randcolor;
    ctx.shadowBlur=25;
    }
}

circles();








let whatsapp = document.querySelector('.whatsapp')
let snapchat = document.querySelector('.snapchat')
let insta = document.querySelector('.insta')
let email = document.querySelector('.email')

let whatsappname = document.querySelector('.whatsapp-name')
let snapchatname = document.querySelector('.snapchat-name')
let instaname = document.querySelector('.insta-name')
let emailname = document.querySelector('.email-name')

whatsapp.addEventListener('mouseover',function(){
    whatsappname.classList.add("add-to-hover");
})
snapchat.addEventListener('mouseover',function(){
    snapchatname.classList.add("add-to-hover");
})
insta.addEventListener('mouseover',function(){
    instaname.classList.add("add-to-hover");
})
email.addEventListener('mouseover',function(){
    emailname.classList.add("add-to-hover");
})


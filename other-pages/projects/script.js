let heading= document.querySelectorAll(".heading4 span")

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


let canvas2=document.querySelector('#canvas2')
let ctx=canvas2.getContext('2d');

canvas2.width=document.body.clientWidth;
canvas2.height=document.body.clientHeight;

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
let list = document.querySelector('.list-iteam');
let menu = document.querySelector('#menu');
let cross = document.querySelector('#cross');

menu.addEventListener('click', (()=>{
   list.style.transform = 'translateX(0%)'
   cross.style.display = 'block';
   menu.style.display = 'none';
}))
cross.addEventListener('click', (()=>{
    list.style.transform = 'translateX(100%)'
    menu.style.display = 'block';
    cross.style.display = 'none';
 }))

 function animation(){
gsap.from('.text-box h1 , .text-box p  ', {
   x:100,
   opacity:0,
   stagger:0.8,
   duration:1,
   delay:0.1
   
})

gsap.from('nav a img ,.list-iteam li',{
   y:-100,
   opacity:0,
   duration:1,
   delay:0.1,
   stagger:0.3
})

gsap.from('.top-text h1 , .top-text p  ', {
   y:100,
   opacity:0,
   stagger:0.8,
   duration:1,
   delay:2
   
})



 }
 animation()
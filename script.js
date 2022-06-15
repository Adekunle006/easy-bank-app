var burger = document.querySelector('svg.burger') ; 

var closeNav = document.querySelector('.close')

var section1 = document.querySelector('.section1')

var nav = document.getElementById('nav')

var topControl = document.querySelector('.top-control') ;

var links = document.querySelectorAll('nav a') ;


links.forEach((link)=>{
   link.addEventListener('click' , ()=>{

      closeNav.style.display = ' none'

      burger.style.display = 'block'

      nav.style.transform = 'translateY(-200%)'

   })
})



burger.addEventListener('click' , ()=>{
   burger.style.display = 'none'
   closeNav.style.display = ' block'
   nav.style.transform = 'translateY(10%)'
   
})


closeNav.addEventListener('click' , ()=>{
   burger.style.display = ' block'
   closeNav.style.display = ' none'
   nav.style.transform = 'translateY(-200%)'

})

topControl.addEventListener('click' , ()=>{
   document.documentElement.scrollTop = 0 ;

   document.body.scrollTop = 0 ;
})


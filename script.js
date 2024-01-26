const menubtn =document.querySelector('.menu-btn')
const navlink =document.querySelector('.nav-link')
menubtn.addEventListener('click',()=>{
    navlink.classList.toggle('mobile-menu')
})
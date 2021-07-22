const container = document.querySelector('.menu-container')
const clickAnyNav = document.querySelectorAll('.h-list')


clickAnyNav.forEach(link => {
link.addEventListener('click', (e) => {
        closeNav(e)
     })
})


        
 container.addEventListener('click', () => {
    const nav = document.querySelector('nav')
    if(nav.classList.contains('nav')) {
      openNav()
    } else {
      closeNav()
    }
   

 })

 function openNav() {

    const top = document.getElementById('top')
    const middle = document.getElementById('middle')
    const bottom = document.getElementById('bottom')
    const nav = document.querySelector('nav')

    top.setAttribute('class', 'transform-arrow-top')
    middle.setAttribute('class', 'open')
    bottom.setAttribute('class', 'transform-arrow-bottom')
    nav.classList.remove('nav')
 }

 function closeNav() {
    const top = document.getElementById('top')
    const middle = document.getElementById('middle')
    const bottom = document.getElementById('bottom')
    const nav = document.querySelector('nav')

    top.setAttribute('class', 'transform-top')
    middle.setAttribute('class', 'removable')
    bottom.setAttribute('class', 'transform-bottom')
    nav.classList.add('nav')


 }


 const aboutToolsBtn = document.querySelectorAll('[data-modal-target]')
 const closeBtn = document.querySelectorAll('.times')
 const overlay = document.getElementById('overlay')

    aboutToolsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
    const modal = document.querySelector(btn.dataset.modalTarget)
    openModal(modal);
   })
 })

     closeBtn.forEach(btn => {
     btn.addEventListener('click', () => {
     const close = btn.closest('.modal-wrapper')
     closeModal(close)
     })
 })



 function closeModal(modal) {
     
     if(modal == null) return

     modal.classList.remove('active')
     overlay.classList.remove('active')
 }
 

 function openModal(modal) {

    if(modal == null) return

       modal.classList.add('active')
       overlay.classList.add('active')
       

 }
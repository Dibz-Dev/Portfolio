

const container = document.querySelector('.menu-container');
const clickAnyNav = document.querySelectorAll('.h-list');

const aboutToolsBtn = document.querySelectorAll('[data-modal-target]');
const closeBtn = document.querySelectorAll('.times');
const overlay = document.querySelector('#overlay');
const about = document.querySelector('#about');
const tools = document.querySelector('#tools');
const body = document.querySelector('body');
const form = document.querySelector('#contact');

const feedback = document.querySelector('#feedback-container');



const api_Url = "https://dibspersonal.herokuapp.com/getFeedback";



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

    top.classList.add('active')
    middle.setAttribute('class', 'open')
    bottom.classList.add('active')
    nav.classList.remove('nav')
 }

   function closeNav() {
    const top = document.getElementById('top')
    const middle = document.getElementById('middle')
    const bottom = document.getElementById('bottom')
    const nav = document.querySelector('nav')

    top.classList.remove('active')
    middle.setAttribute('class', 'removable')
    bottom.classList.remove('active')
    nav.classList.add('nav')


 }


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

 overlay.addEventListener('click', (e) => {

   

   overlay.classList.remove('active')
   about.classList.remove('active')
   tools.classList.remove('active')


  console.log('clicked')
 })

 body.addEventListener('wheel', () => {

   
   let nav = document.querySelector('nav')

   if(!nav.classList.contains('nav')) {
      closeNav()
   }

   
 })

 

 form.addEventListener('submit', (e) => {
    
   e.preventDefault();


 })


 const getFeedback = async () => {

  const query = await fetch(api_Url);
  const data = await query.json()

  const matches = data.map(comment => {

    feedback.innerHTML += 
     ` <div>
       <div id="name" class="name">
       <h4 class="name-comment-style"><strong>Posted by:</strong> ${data[0].name}</h4>
       </div>
       <div id="feedback" class="feedback">
       <p class="feedback-comment-style"><strong>Feedback:</strong> ${data[0].feedback}</p>
       </div> 
       </div> 
      `
    
  })
  

  

  

  
  
  }

//  getFeedback()
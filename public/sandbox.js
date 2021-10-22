
const container = document.querySelector('.menu-container');
const clickAnyNav = document.querySelectorAll('.h-list');

const aboutToolsBtn = document.querySelectorAll('[data-modal-target]');
const closeBtn = document.querySelectorAll('.times');
const closeProject = document.querySelectorAll('.project-times');
const overlay = document.querySelector('#overlay');
const about = document.querySelector('#about');
const tools = document.querySelector('#tools');
const body = document.querySelector('body');
const form = document.querySelector('#contact');
const html = document.querySelector('html');
const feedback = document.querySelector('#feedback-container');
const list = document.querySelectorAll('[data-list-style]');

const weather = document.querySelector('.project-weather')
const gumboot = document.querySelector('.project-gumboot')
const shopean = document.querySelector('.project-shopean')


// const api_Url = "https://dibspersonal.herokuapp.com/getFeedback";
// const api_Url = "https://localhost:3000/getFeedback";


list.forEach(item => {
  item.addEventListener('click', () => {

    closeNav()
})

})

        
 container.addEventListener('click', () => {
    const nav = document.querySelector('nav')
    if(nav.classList.contains('active')) {
      closeNav()
      html.classList.remove('active')
    } else {
      openNav()
      html.classList.add('active')
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
    nav.classList.add('active')
 }

   function closeNav() {
    const top = document.getElementById('top')
    const middle = document.getElementById('middle')
    const bottom = document.getElementById('bottom')
    const nav = document.querySelector('nav')

    top.classList.remove('active')
    middle.setAttribute('class', 'removable')
    bottom.classList.remove('active')
    nav.classList.remove('active')
    html.classList.remove('active')

 }


    aboutToolsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
    const modal = document.querySelector(btn.dataset.modalTarget)
    openModal(modal);
   })
 })

     closeBtn.forEach(btn => {
     btn.addEventListener('click', () => {
     let close = btn.closest('.modal-wrapper')
     closeModal(close)
     })
 })

 closeProject.forEach(project => {

  project.addEventListener('click', () => {
    let close = project.closest('.ind-project')

    if(!weather.classList.contains('hide') || !gumboot.classList.contains('hide') || !shopean.classList.contains('hide')) {
      closeModal(close)
    }
    
  })
 })


 function closeModal(modal) {
     
     if(modal == null) return

     modal.classList.remove('active')
     overlay.classList.remove('active')
     html.classList.remove('active')

     weather.classList.add('hide')
     shopean.classList.add('hide')
     gumboot.classList.add('hide')


 }
 

 function openModal(modal) {

    if(modal == null) return

       modal.classList.add('active')
       overlay.classList.add('active')
       html.classList.add('active')

 }

 overlay.addEventListener('click', (e) => {

   

   overlay.classList.remove('active')
   about.classList.remove('active')
   tools.classList.remove('active')
   html.classList.remove('active')
   weather.classList.add('hide')
   shopean.classList.add('hide')
   gumboot.classList.add('hide')

 
 })

 body.addEventListener('wheel', () => {

   
   let nav = document.querySelector('nav')

   if(!nav.classList.contains('nav')) {
      closeNav()
      
   }

   
 })

 

 form.addEventListener('submit', (e) => {
    
  //  e.preventDefault();


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

const image = document.querySelectorAll('img');

image.forEach(img => {

  img.addEventListener('click', (e) => {

  
    overlay.classList.add('active')
    html.classList.add('active')
    e.target.classList.contains('weatherThumbnail') && weather.classList.remove('hide');
    e.target.classList.contains('shopeanThumbnail') && shopean.classList.remove('hide');
    e.target.classList.contains('gumbootThumbnail') && gumboot.classList.remove('hide');

    // if(!openModal) {
    //   openModal()
    // } else {
    //   closeModal()
    // }
  })
})
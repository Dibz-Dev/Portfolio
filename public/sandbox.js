const para = document.querySelector('#story-config');
const cont = document.querySelector('.cont-reading');
const menu = document.querySelector('.fa-bars');
const ul = document.querySelector('ul.dropdown');
const navigation = document.querySelector('.nav');


//         cont.addEventListener('click', () => {
//         if(cont.classList.contains('cont-reading')) {
//                 cont.setAttribute('style', 'display:none');
//         }

//  const span = document.querySelector('span.display');
//  const html = `<span> Well, Just over a year ago this virus (Covid...I think its name was) shut down london (and possibly 1 or 2 other cities around the world...) and as my Restaurant was closed for the foreseable future I was sent home and put on furlough. Stuck at home with absolutely nothing to do I decided to learn something different and I chose to learn to code. It began innocently enough mucking around with the basics of Command Prompt when I came across Html, quickly followed by CSS. Everything was going along swimmingly, until Javascript reared its ugly head! and thats when things got interesting. Up until this point I honestly had no real aspirations in the Dev world, but once I hit Javascript I was addicted, I wanted to learn more and more and I knew I wanted to pursue this....so, I started plotting my journey to becoming a Web Developer.</span>
// `;
//             if(span.classList.contains('display')) {
//                     span.innerHTML += html;
//  }
// });
// const cancel = document.querySelector('.projects-sect');
// const span = document.querySelector('span.display');

//         cancel.addEventListener('mouseenter', () => {
//         if(span.classList.contains('display')) {
//                 span.innerHTML = '';
//         }

//         if(span.classList.contains('display')) {
//                 cont.setAttribute('style','')
//         }

//   });

  menu.addEventListener('click', () => {


            if(navigation.classList.contains('nav')) {
                menu.classList.add('anime')
             } else if (!navigation.classList.contains('nav')) {
                menu.classList.remove('anime')
             }
    
             if(!navigation.classList.contains('nav')) {
                menu.classList.add('anime-rev')
            } else if (navigation.classList.contains('nav')) {
                menu.classList.remove('anime-rev')
            }

            if(navigation.classList.contains('nav')) {
                 navigation.classList.remove('nav')
            } else {
                navigation.classList.add('nav')
            }

        
      
    
  });

            document.addEventListener('scroll', () => {
            if(!navigation.classList.contains('nav')) {
             navigation.classList.add('nav')
             } else {
                 menu.classList.remove('anime')
             }

           
    
  });
   
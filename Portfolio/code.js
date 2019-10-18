// function fader() {
//     $(".preloader").fadeOut("slow");
//     }
//     setTimeout(fader, 3500);
    
//     setTimeout(function() {
//         $("#fadeIn").fadeIn();
//         }, 3500);

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


// var preloader = document.createElement('div');
// var loader = document.createElement('span');
// var loading = document.createElement('i');
// var style = document.createElement('style');
// var dot = 0;
// loader.innerHTML = `
// <svg x="0px" y="0px" height="100" viewBox="0 0 298 53.9">
//   <style>
//     path { stroke-dasharray: 150, 200; stroke-dashoffset: 0; animation: lakat 4s infinite linear; }
//     @keyframes lakat { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 1050; } }
//   </style>
//   <path stroke="green" stroke-width="1px" fill="none" class="st0" d="M297.5,41.2h-76.6c-0.5,0-0.9,0.4-1,0.8l-1.6,11.3l-3.1-32c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.3-1,0.8
//                        l-5.3,25.5l-2.3-10.9c-0.1-0.4-0.4-0.7-0.9-0.8c-0.4,0-0.8,0.2-1,0.6l-2.3,4.8h-107c0,0,0,0,0,0H82c-1.6,0-2.2,1.1-2.2,1.6
//                        l-1.6,11.3l-3.1-52c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.3-1,0.8l-9.3,45.5l-2.3-10.9c-0.1-0.4-0.4-0.7-0.9-0.8c-0.4,0-0.8,0.2-1,0.6
//                        l-2.3,4.8H0.5"/>
// </svg>`;

// preloader.setAttribute('id', 'preloader');

// style.innerHTML = `
// #preloader{
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   background-color: #ececec;
//   color: green;
//   font-style: italic;
// }`;
// loading.innerHTML = 'Sending out a good vibe';
// setInterval(() => {
//     if(dot > 3){
//       dot = 0;
//       loading.innerHTML = "Loading";
//     } else {
//       loading.innerHTML = loading.innerHTML + ".";
//     } dot++;
// }, 1000);
// preloader.appendChild(loader);
// preloader.appendChild(loading);
// document.body.appendChild(preloader);
// document.body.appendChild(style);
// let stateCheck = setInterval(() => {
//     if (document.readyState === 'complete') {
//       setTimeout(function() {
//         clearInterval(stateCheck);
//         document.body.removeChild(preloader);
//         document.body.removeChild(style);
//       },3300)
//     }
// }, 100);

$(document).ready(function() {
    ScrollReveal().reveal('.aboutskills', { delay: 100 });
    ScrollReveal().reveal('.aboutmediv', { delay: 100 });
    ScrollReveal().reveal('#myworks_title', { delay: 100 });
    ScrollReveal().reveal('#touch_title', { delay: 100 });
    ScrollReveal().reveal('.button_story', { delay: 100 });
    ScrollReveal().reveal('.aboutachieve', { delay: 100 });
    ScrollReveal().reveal('.column', { delay: 100 });
    ScrollReveal().reveal('.project1', { delay: 100 });
    ScrollReveal().reveal('.project2', { delay: 100 });
    ScrollReveal().reveal('.project3', { delay: 100 });
    ScrollReveal().reveal('.project4', { delay: 100 });
    ScrollReveal().reveal('.contact-box', { delay: 100 });
    ScrollReveal().reveal('.contacticons', { delay: 100 });
    ScrollReveal().reveal('#desk_link', { delay: 1000 });
    ScrollReveal().reveal('#mob_link', { delay: 1000 });
    ScrollReveal().reveal('.desktop_image', { delay: 300 });
    ScrollReveal().reveal('.mobile_image', { delay: 600 });
    ScrollReveal().reveal('#mobile-image', { delay: 300 });
    ScrollReveal().reveal('#cell-image', { delay: 300 });
    ScrollReveal().reveal('#cell-image2', { delay: 600 });
    ScrollReveal().reveal('#wires-image1', { delay: 300 });
    ScrollReveal().reveal('#wires-image2', { delay: 800 });
    ScrollReveal().reveal('#wires-image3', { delay: 1000 });
    ScrollReveal().reveal('#myrole', { delay: 300 });
    ScrollReveal().reveal('#overview', { delay: 800 });
    ScrollReveal().reveal('#problem_top', { delay: 1200 });
    ScrollReveal().reveal('#guidestyle', { delay: 400 });
    ScrollReveal().reveal('#newnav-image', { delay: 200 });
    ScrollReveal().reveal('.sitemap-image', { delay: 200 });
    ScrollReveal().reveal('#heuru_title', { delay: 300 });
    ScrollReveal().reveal('#heurutext', { delay: 200 });
    ScrollReveal().reveal('#list_analysis', { delay: 300 });
    ScrollReveal().reveal('#heuru-image', { delay: 500 });
    ScrollReveal().reveal('#testing', { delay: 200 });
  });
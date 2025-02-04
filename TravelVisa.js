function toggleMenu() {
    const element = document.querySelector(".nav");
    element.classList.toggle ('visible');
}

document.addEventListener("DOMContentLoaded", function(){
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.2
    };
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    sections.forEach(section => {
        observer.observe(section);
    });
});



// const counters = document.querySelectorAll('.counting');

// counters.forEach(counter =>{
//     counter.innerText = '0';

//     const updateCounter = () => {
//         const target = +counter.getAttribute('data-target');
//         const current = +counter.innerText.replace(/\D/g, '');
//         const increment = target / 200;

//         if(current < target) {
//             counter.innerText = `${Math.ceil(current + increment)}${counter.innerText.includes('%') ? '%' : '+'}`;
//             setTimeout(updateCounter, 20);

//         } else{
//             counter.innerText = `${target}${counter.innerText.includes('%') ? '%' : '+'}`;
//         }
//     };
//     updateCounter();
// });

// window.addEventListener('scroll', () =>{
//     const countersSection = document.querySelector('.counting');
//     const sectionPosition = countersSection.getBoundingClientRect().top;
//     const screenPosition = window.innerHeight / 1.3;

//     if(sectionPosition < screenPosition) {
//         counters.forEach(counter => {
//             if(counter.innerText === '0') {
//                 updateCounter(counter);
//             }
//         });
//     }
// });
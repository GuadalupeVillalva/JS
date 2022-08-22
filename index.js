let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value + 'px';
    mountains_behind.style.top = value * 0.25 + 'px'; // cuanto mas bajo el valor mas lento va
})

let daynight = document.querySelector('.daynight');
let body = document.querySelector('body');

daynight.onclick = function(){
    daynight.classList.toggle('active');
    body.classList.toggle('dark');
}

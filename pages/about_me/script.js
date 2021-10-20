/* Who Am I? Function */

const clickHereFirst = document.getElementById('click-here-pic-first-question');

function uclaAlert() {
    alert('I am a 24 year-old college graduate from UCLA amidst a career change.')
}

clickHereFirst.addEventListener('click', uclaAlert);

/* Passions and Hobbies Function */

const clickHereSecond = document.getElementById('click-here-pic-second-question');

function hobbiesAlert() {
    alert('I love to cook, sing, study psychology, and work on my coding skills!')
}

clickHereSecond.addEventListener('click', hobbiesAlert);

/* Career Function */

const clickHereThird = document.getElementById('click-here-pic-third-question');

function careerAlert() {
    alert('I hope to combine my love for coding and psychology and eventually work at a mental health tech start up!')
}

clickHereThird.addEventListener('click', careerAlert);




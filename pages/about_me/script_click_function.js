/* Who Am I? Function */

const clickHereFirst = document.getElementById('click-here-pic-first-question');

function uclaAlert() {
    alert("I am a 24 year-old whose parents are originally from Israel, but I've grown up in California my entire life. I graduated from UCLA in 2019 with a BA in Psychology.")
}

clickHereFirst.addEventListener('click', uclaAlert);

/* Passions and Hobbies Function */

const clickHereSecond = document.getElementById('click-here-pic-second-question');

function hobbiesAlert() {
    alert("I have always loved to sing and dance, and started playing guitar, as well as writing my own songs, several years ago. Curling up with a book, blanket, and some mint tea, sounds like my IDEAL way to spend a day when it's raining and gloomy outside. Learning about psychological concepts and true crime cases has become a very big part of my life, and keeps my brain active and stimulated. I think it's very calming and therapeutic to bake and cook, so I like trying out new recipes, and of course then tasting them ;). Most recently, I have really been enjoying going through the modules for the Flatiron pre-work, and learning the basics of web development!")
}

clickHereSecond.addEventListener('click', hobbiesAlert);

/* Career Function */

const clickHereThird = document.getElementById('click-here-pic-third-question');

function careerAlert() {
    alert("I hope to combine my love for coding and psychology and eventually work at a mental health tech start up! I would love to work for a company who's goal is to create an app that uplfits people and helps them maximize their mental, physical, and emotional health and wellness.")
}

clickHereThird.addEventListener('click', careerAlert);

/* Click Here Button Function */

const clickHereButton = document.getElementById('click-here-button');

function clickButtonAlert() {
    alert("Thank you for reaching out! I look forward to speaking with you soon! :)");

}    

clickHereButton.addEventListener('click', clickButtonAlert);






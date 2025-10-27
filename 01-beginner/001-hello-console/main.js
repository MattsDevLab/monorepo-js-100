let firstName = prompt("What is your name?");
let introText = document.querySelector(".intro-text");

if(introText){
    introText.innerHTML = `Hello ${firstName} and welcome to the monorepo 100 JS Challenge.`;
}


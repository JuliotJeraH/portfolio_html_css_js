const menu = document.querySelector('.menu-links');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const cvBtn = document.querySelector('.btn.btn-color-2');
const contactBtn = document.querySelector('.btn.btn-color-1');
const linkedinIcon = document.querySelector('.icon.linkedinIcon');
const githubIcon = document.querySelector('.icon.githubIcon');
const arrow1 = document.querySelector('.icon.arrow.arrow1');
const arrow2 = document.querySelector('.icon.arrow.arrow2');
const arrow3 = document.querySelector('.icon.arrow.arrow3');
const btnProject1 = document.querySelector('.btnProject1');
const btnProject2 = document.querySelector('.btnProject2');
const btnProject3 = document.querySelector('.btnProject3');
const btnLiveDemo = document.querySelectorAll('.btnLiveDemo');


// -------------------- event listeners -------------------- //

hamburgerIcon.addEventListener('click', toggleMenu);
cvBtn.addEventListener('click', openCV);
contactBtn.addEventListener('click', showContactForm);
linkedinIcon.addEventListener('click', linkedinProfile);
githubIcon.addEventListener('click', githubProfile);
arrow1.addEventListener('click', showExperienceForm);
arrow2.addEventListener('click', showProjectsForm);
arrow3.addEventListener('click', showContactForm);
btnProject1.addEventListener('click', githubProject1);
btnProject2.addEventListener('click', githubProject2);
btnProject3.addEventListener('click', githubProject3);




// -------------------- all functions -------------------- //
function toggleMenu() {
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

function openCV() {
    window.open('./assets/resume-example.pdf');
}

function showContactForm() {
    location.href = './#contact';
}

function linkedinProfile(){
    location.href = 'https://www.linkedin.com/in/juliot-jera-b70962342/';
}

function githubProfile(){
    location.href = 'https://github.com/JuliotJeraH';
}

function showExperienceForm(){
    location.href = './#experience';
}

function showProjectsForm(){
    location.href = './#projects';
}

function githubProject1(){
    location.href = 'https://github.com/JuliotJeraH/Hianatra';
}

function githubProject2(){
    location.href = 'https://github.com/JuliotJeraH/tantsaha_connect';
}

function githubProject3(){
    location.href = 'https://github.com/JuliotJeraH/VOTE2';
}

btnLiveDemo.forEach((button, index) => {
    button.addEventListener('click', () => {
        window.open('./assets/demoKisarisary.txt');
    });
});


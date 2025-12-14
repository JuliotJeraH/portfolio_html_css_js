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

// Contact form elements
const contactForm = document.getElementById('contact-form');
const contactStatus = document.getElementById('contact-status');

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

// Confirmation modal + Formspree send (no mailto fallback)
const confirmModal = document.getElementById('confirm-modal');
const confirmName = document.getElementById('confirm-name');
const confirmEmail = document.getElementById('confirm-email');
const confirmMessage = document.getElementById('confirm-message');
const confirmSend = document.getElementById('confirm-send');
const confirmCancel = document.getElementById('confirm-cancel');

// Replace this with your Formspree form id (e.g. 'mxknpkwr')
const FORM_ID = 'YOUR_FORMSPREE_FORM_ID';

function openModal() { confirmModal.setAttribute('aria-hidden', 'false'); }
function closeModal() { confirmModal.setAttribute('aria-hidden', 'true'); }

if (confirmModal) {
  confirmModal.addEventListener('click', (e) => {
    if (e.target && e.target.dataset && e.target.dataset.close === 'true') closeModal();
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();
    confirmName.textContent = name || '(no name)';
    confirmEmail.textContent = email || '(no email)';
    confirmMessage.textContent = message || '(no message)';
    openModal();
  });

  confirmCancel.addEventListener('click', (e) => { e.preventDefault(); closeModal(); });

  confirmSend.addEventListener('click', async (e) => {
    e.preventDefault();
    if (FORM_ID === 'YOUR_FORMSPREE_FORM_ID') {
      contactStatus.textContent = "Formspree non configuré. Voir EMAIL_INSTRUCTIONS.md pour l'installer.";
      closeModal();
      setTimeout(() => { contactStatus.textContent = ''; }, 6000);
      return;
    }

    const submitBtn = contactForm.querySelector('.contact-btn');
    const formData = new FormData(contactForm);
    try {
      submitBtn.disabled = true;
      contactStatus.textContent = 'Envoi en cours...';
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST', body: formData, headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        contactForm.reset();
        contactStatus.textContent = 'Message envoyé. Merci !';
      } else {
        const data = await res.json();
        contactStatus.textContent = data?.error || 'Une erreur est survenue.';
      }
    } catch (err) {
      contactStatus.textContent = "Échec de l'envoi. Vérifie ta connexion.";
    } finally {
      submitBtn.disabled = false;
      closeModal();
      setTimeout(() => { contactStatus.textContent = ''; }, 5000);
    }
  });
}


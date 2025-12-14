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
const menuLinks = document.querySelectorAll('.menu-links a');


// -------------------- event listeners -------------------- //

hamburgerIcon.addEventListener('click', toggleMenu);
document.addEventListener('click', closeMenuOnClickOutside);
document.addEventListener('keydown', closeMenuOnClickEscape);
menuLinks.forEach(a => a.addEventListener('click', handleMenuLinkClick));
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
    hamburgerIcon.classList.toggle('open');
    const expanded = hamburgerIcon.getAttribute('aria-expanded') === 'true';
    hamburgerIcon.setAttribute('aria-expanded', String(!expanded));
}

function handleMenuLinkClick() {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        hamburgerIcon.classList.remove('open');
        hamburgerIcon.setAttribute('aria-expanded', 'false');
    }
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

btnLiveDemo.forEach((button)=>{
    button.addEventListener('click', () => {
        window.open('./assets/demoKisarisary.txt');
    });
});

function closeMenuOnClickOutside(e){
    if (!menu.classList.contains('open')) return;
    if (!e.target.closest('#hamburger-nav') && !e.target.closest('.menu-links')) {
        menu.classList.remove('open');
        hamburgerIcon.classList.remove('open');
        hamburgerIcon.setAttribute('aria-expanded', 'false');
    }
};

function closeMenuOnClickEscape(e){
    if (e.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        hamburgerIcon.classList.remove('open');
        hamburgerIcon.setAttribute('aria-expanded', 'false');
    }
};































// -------------------- EmailJS contact form ( Bibliothèque fa ts lasa le mesazy rah tsisy an tony kkkk) -------------------- //
(function () {
    if (window.emailjs) {
        emailjs.init("MDf3DYcSCmpvfsrQ2");
    }
})();

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validateName(name) {
        const t = name.trim();
        return t.length >= 2 && /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/.test(t);
    }

    function validateMessage(msg) {
        const t = msg.trim();
        if (t.length < 10) return false;
        if (t.length > 2000) return false;
        if (/(<script\b[^>]*>)/i.test(t)) return false;
        return true;
    }

    function clearErrors(form) {
        form.querySelectorAll('.error').forEach(el => el.textContent = '');
        const feedback = form.querySelector('.contact-feedback');
        if (feedback) feedback.textContent = '';
    }

    function showFeedback(form, message, success = true) {
        const fb = form.querySelector('.contact-feedback');
        if (!fb) return;
        fb.textContent = message;
        if (success) {
            fb.style.color = '#1a7f37';
        } else {
            fb.style.color = '#c53030';
        }
    }

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        clearErrors(this);

        const nameInput = this.querySelector('input[name="from_name"]');
        const emailInput = this.querySelector('input[name="reply_to"]');
        const msgInput = this.querySelector('textarea[name="message"]');
        const submitBtn = this.querySelector('button[type="submit"]');

        let valid = true;

        if (!nameInput || !validateName(nameInput.value)) {
            let err = null;
            if (nameInput && nameInput.nextElementSibling && nameInput.nextElementSibling.classList.contains('error')) {
                err = nameInput.nextElementSibling;
            }
            if (err) err.textContent = 'Please enter a valid name (2+ letters).';
            if (valid && nameInput) nameInput.focus();
            valid = false;
        }

        if (!emailInput || !validateEmail(emailInput.value)) {
            let err = null;
            if (emailInput && emailInput.nextElementSibling && emailInput.nextElementSibling.classList.contains('error')) {
                err = emailInput.nextElementSibling;
            }
            if (err) err.textContent = 'Please enter a valid email address.';
            if (valid && emailInput) emailInput.focus();
            valid = false;
        }

        if (!msgInput || !validateMessage(msgInput.value)) {
            let err = null;
            if (msgInput && msgInput.nextElementSibling && msgInput.nextElementSibling.classList.contains('error')) {
                err = msgInput.nextElementSibling;
            }
            if (err) err.textContent = 'Message must be at least 10 characters and must not contain script tags.';
            if (valid && msgInput) msgInput.focus();
            valid = false;
        }

        if (!valid) return;

        // Disable submit button while sending
        let originalText = '';
        if (submitBtn) {
            originalText = submitBtn.textContent;
        }
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending…';
            submitBtn.setAttribute('aria-busy', 'true');
        }

        emailjs.sendForm('service_tdi8dra', 'template_p0gczme', this)
            .then(() => {
                showFeedback(this, 'Email sent successfully!', true);
                this.reset();
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText || 'Send';
                    submitBtn.removeAttribute('aria-busy');
                }

                setTimeout(() => {
                    const fb = this.querySelector('.contact-feedback');
                    if (fb) fb.textContent = '';
                }, 6000);
            })
            .catch(err => {
                let errMsg = 'Please try again.';
                if (err && (err.text || err.message)) {
                    errMsg = err.text || err.message;
                }
                showFeedback(this, 'Error sending: ' + errMsg, false);
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText || 'Send';
                    submitBtn.removeAttribute('aria-busy');
                }
            });
    });
}


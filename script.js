document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Merci ${name}! Votre message a été envoyé avec succès. Nous vous contacterons à ${email}.`);
    this.reset();
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Add subtle animation to header on load
window.addEventListener('load', function() {
    const header = document.querySelector('header');
    header.style.transition = 'all 0.5s ease';
    header.style.transform = 'scale(1.02)';
    setTimeout(() => header.style.transform = 'scale(1)', 500);
});
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

    // Initialize Chart.js bar chart
    const ctx = document.getElementById('enrollmentChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['IA', 'Cybersécurité', 'Admin SI', 'Big Data', 'Blockchain', 'Réseau & BM'],
            datasets: [{
                label: 'Étudiants inscrits',
                data: [120, 80, 60, 90, 50, 70],
                backgroundColor: 'rgba(0, 0, 255, 0.5)',
                borderColor: 'rgba(0, 0, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Nombre d\'étudiants'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Programmes'
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
});
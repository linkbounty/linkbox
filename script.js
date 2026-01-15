document.addEventListener('DOMContentLoaded', function() {
    const animationContainer = document.getElementById('animation-container');
    const particleCount = 20; // Aap particles ki sankhya yahan se badal sakte hain

    // Alag alag rang
    const colors = ['#00ffff', '#ff2d55', '#ffcc00', '#5856d6', '#34c759', '#af52de'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random styles set karna
        const size = Math.random() * 15 + 5; // 5 se 20px tak ka size
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${Math.random() * 100}%`; // Random horizontal position
        
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`; // 5 se 15s tak ka duration
        particle.style.animationDelay = `${Math.random() * 5}s`; // 0 se 5s tak ka delay
        
        particle.style.background = colors[Math.floor(Math.random() * colors.length)]; // Random color

        animationContainer.appendChild(particle);
    }
});

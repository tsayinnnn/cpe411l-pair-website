document.addEventListener('DOMContentLoaded', () => {
    console.log("Next.js Landing Page Clone Loaded");
    
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.05) 0%, #0a0a0a 100%)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.background = '#0a0a0a';
        });
    });
});

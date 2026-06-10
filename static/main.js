// remove succes message mail after timer
setTimeout(() => {
    const message = document.getElementById('success-message');
    if (message) {
        message.style.transition = "opacity 0.5s ease"; 
        message.style.opacity = "0"; 
        setTimeout(() => message.remove(), 500); 
    }
}, 9000); // 5000ms = 9 sek

// Technology Modal Functions
function showModal(techData) {
    console.log('Raw techData:', techData);
    // Parse the JSON string if it's a string
    const tech = typeof techData === 'string' ? JSON.parse(techData) : techData;
    console.log('Parsed tech object:', tech);
    // Get the modal and display it
    const modal = document.getElementById('tech-modal');
    
    // Update modal content
    document.getElementById('modal-image').src = tech.image_url;
    document.getElementById('modal-title').textContent = tech.name;
    document.getElementById('modal-level').textContent = tech.experience_level;
    document.getElementById('modal-description').textContent = tech.description;
    
    // Update lists
    document.getElementById('modal-features').innerHTML = tech.key_features
        .map(feature => `<li>${feature}</li>`).join('');
    document.getElementById('modal-projects').innerHTML = tech.personal_projects
        .map(project => `<li>${project}</li>`).join('');
    
    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    // Debug log
    console.log('Modal opened for:', tech.name);
}

function closeModal() {
    const modal = document.getElementById('tech-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Close modal when clicking outside
document.getElementById('tech-modal')?.addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

// Add keyboard support for closing modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});
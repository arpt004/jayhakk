// DOM Elements
const faqItems = document.querySelectorAll('.faq-item');
// Initialize FAQ
function initFAQ() {
    // Add event listeners
    addEventListeners();
}

// Add Event Listeners
function addEventListeners() {
    // FAQ item click
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            toggleFAQ(item);
        });
    });
}

// Toggle FAQ Item
function toggleFAQ(item) {
    const isActive = item.classList.contains('active');
    
    // Close all items
    faqItems.forEach(faqItem => {
        faqItem.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        item.classList.add('active');
    }
}


// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initFAQ); 
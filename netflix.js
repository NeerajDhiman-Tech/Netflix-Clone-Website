// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// FAQ functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // If this item wasn't active, open it
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Email form handling
const emailForms = document.querySelectorAll('.email-signup');

emailForms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        if (email && isValidEmail(email)) {
            alert('Thank you for your interest! This is a demo Netflix clone.');
            this.querySelector('input[type="email"]').value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Language selector functionality
const languageSelectors = document.querySelectorAll('select');

languageSelectors.forEach(selector => {
    selector.addEventListener('change', function() {
        const selectedLanguage = this.value;
        // In a real application, this would change the language
        console.log('Language changed to:', selectedLanguage);
    });
});

// Smooth scrolling for anchor links (if any are added)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Video autoplay handling for better performance
const videos = document.querySelectorAll('video');

const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
            video.play().catch(e => {
                console.log('Video autoplay failed:', e);
            });
        } else {
            video.pause();
        }
    });
}, {
    threshold: 0.5
});

videos.forEach(video => {
    videoObserver.observe(video);
});

// Add loading states for better UX
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Handle form focus states
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// ==========================================
// DARK MODE TOGGLE
// ==========================================

const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;

// Load dark mode preference from localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    document.body.classList.add('dark-mode');
    if (darkModeToggle) {
        darkModeToggle.textContent = '☀️';
        darkModeToggle.classList.add('active');
    }
}

// Add dark mode toggle functionality
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Update button emoji and state
        const isDark = document.body.classList.contains('dark-mode');
        darkModeToggle.textContent = isDark ? '☀️' : '🌙';
        darkModeToggle.classList.toggle('active');
        
        // Save preference to localStorage
        localStorage.setItem('darkMode', isDark);
        
        // Log the state
        console.log('Dark mode:', isDark ? 'enabled' : 'disabled');
    });
}

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// ACTIVE NAV LINK ON SCROLL
// ==========================================

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the first nav link (home) by default
    const homeLink = document.querySelector('a[href="index.html"]') || document.querySelector('a[href="../index.html"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
});

// ==========================================
// CONTACT FORM HANDLING
// ==========================================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Validate form
        if (!data.name || !data.email || !data.subject || !data.message) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Log form data (in a real app, this would be sent to a server)
        console.log('Form Data:', data);

        // Show success message
        showNotification('Message sent successfully! We will get back to you soon.', 'success');

        // Reset form
        contactForm.reset();
    });
}

// ==========================================
// NEWSLETTER FORM HANDLING
// ==========================================

const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = newsletterForm.querySelector('input[type="email"]').value;

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Log subscription
        console.log('Newsletter Subscription:', { email });

        // Show success message
        showNotification('Successfully subscribed to our newsletter!', 'success');

        // Reset form
        newsletterForm.reset();
    });
}

// ==========================================
// NOTIFICATION SYSTEM
// ==========================================

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background-color: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        border-radius: 5px;
        z-index: 1000;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
    `;

    // Add animation
    const style = document.createElement('style');
    if (!document.querySelector('style[data-notification]')) {
        style.setAttribute('data-notification', 'true');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Add to page
    document.body.appendChild(notification);

    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================

// Create scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.id = 'scrollToTopBtn';
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    background-color: #10b981;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.5rem;
    z-index: 999;
    display: none;
    width: 45px;
    height: 45px;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to top on button click
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effect for scroll to top button
scrollToTopBtn.addEventListener('mouseover', () => {
    scrollToTopBtn.style.backgroundColor = '#059669';
    scrollToTopBtn.style.transform = 'scale(1.1)';
});

scrollToTopBtn.addEventListener('mouseout', () => {
    scrollToTopBtn.style.backgroundColor = '#10b981';
    scrollToTopBtn.style.transform = 'scale(1)';
});

// ==========================================
// QUICK CONTACT FORM (HOME PAGE)
// ==========================================

const quickContactForm = document.getElementById('quickContactForm');
if (quickContactForm) {
    quickContactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formInputs = quickContactForm.querySelectorAll('input, textarea');
        const data = {
            name: formInputs[0].value,
            email: formInputs[1].value,
            message: formInputs[2].value
        };

        // Validate form
        if (!data.name || !data.email || !data.message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Log form data (in a real app, this would be sent to a server)
        console.log('Quick Contact Form Data:', data);

        // Show success message
        showNotification('Message sent successfully! Thank you for contacting us.', 'success');

        // Reset form
        quickContactForm.reset();
    });
}

// ========================================== 

window.addEventListener('load', () => {
    // Animate feature cards on load
    const featureCards = document.querySelectorAll('.feature-card, .service-card, .blog-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `slideUp 0.6s ease-out ${index * 0.1}s forwards`;
    });
});

// ==========================================
// KEYBOARD SHORTCUTS
// ==========================================

document.addEventListener('keydown', (e) => {
    // Press H to go home
    if (e.key === 'h' || e.key === 'H') {
        window.location.href = 'index.html';
    }

    // Press ? to show help
    if (e.key === '?') {
        showNotification('Keyboard Shortcuts: H - Home, ? - Help', 'info');
    }
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function for window resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ==========================================
// INTERACTIVE FAQ ACCORDION
// ==========================================

const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    // Add cursor pointer style
    question.style.cursor = 'pointer';
    
    // Create toggle indicator
    const indicator = document.createElement('span');
    indicator.className = 'faq-toggle-icon';
    indicator.textContent = '+';
    indicator.style.cssText = `
        display: inline-block;
        float: right;
        font-size: 1.5rem;
        font-weight: bold;
        transition: transform 0.3s ease;
        color: #10b981;
    `;
    question.appendChild(indicator);
    
    // Get the answer element (next sibling p tag)
    const answer = question.nextElementSibling;
    if (answer) {
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.3s ease, opacity 0.3s ease, margin 0.3s ease';
        answer.style.opacity = '0';
        answer.style.marginTop = '0';
    }
    
    // Add click event listener
    question.addEventListener('click', function() {
        const icon = this.querySelector('.faq-toggle-icon');
        const answer = this.nextElementSibling;
        
        if (answer) {
            const isOpen = answer.style.maxHeight !== '0px' && answer.style.maxHeight !== '';
            
            if (isOpen) {
                // Close the accordion
                answer.style.maxHeight = '0';
                answer.style.opacity = '0';
                answer.style.marginTop = '0';
                icon.style.transform = 'rotate(0deg)';
            } else {
                // Open the accordion
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.opacity = '1';
                answer.style.marginTop = '15px';
                icon.style.transform = 'rotate(45deg)';
            }
        }
    });
});

// Add hover effect to FAQ items
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        if (!this.querySelector('.faq-answer').style.maxHeight || 
            this.querySelector('.faq-answer').style.maxHeight === '0px') {
            this.style.transform = 'translateX(5px)';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
    
    this.style.transition = 'transform 0.3s ease';
});

// ==========================================
// INITIALIZATION
// ==========================================

console.log('Website script loaded successfully!');

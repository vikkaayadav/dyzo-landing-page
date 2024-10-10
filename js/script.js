// JS for Mobile Navigation

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.MobileNavigationToggle');
    const mobileNav = document.querySelector('.MobileNavigation');
    const closeButton = document.querySelector('.navCloseBtn');

    toggleButton.addEventListener('click', function() {
        mobileNav.classList.toggle('open');
    });
    closeButton.addEventListener('click', function() {
        mobileNav.classList.remove('open');
    });
});


// JS for FAQs

const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
    
            faqQuestions.forEach(q => {
                const currentAnswer = q.nextElementSibling;
                if (currentAnswer && currentAnswer !== answer) {
                    currentAnswer.classList.remove('active');
                    q.classList.remove('active');
                    const currentIcon = q.querySelector('span');
                    if (currentIcon.textContent === '−') {
                        currentIcon.textContent = '+';
                    }
                }
            });
    
            question.classList.toggle('active');
    
            if (answer) {
                answer.classList.toggle('active');
            }
    
            const icon = question.querySelector('span');
            icon.textContent = icon.textContent === '+' ? '−' : '+';
        });
    });
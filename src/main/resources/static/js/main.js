// ===== PROFESSIONAL PORTFOLIO JAVASCRIPT =====

// ===== FIXED LOADING SCREEN =====
// Hide loading screen when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully');

    // Hide loading screen after 500ms (fast enough to see it, but not stuck)
    setTimeout(() => {
        const loadingElement = document.getElementById('loading');
        if (loadingElement) {
            loadingElement.classList.add('hidden');
        }
    }, 500);

    // Continue with the rest of the code...

    // ===== EMAIL COPY FUNCTIONALITY =====
    const emailLink = document.querySelector('.email-link');
    if (emailLink) {
        emailLink.addEventListener('click', function(e) {
            e.preventDefault();

            const email = this.getAttribute('data-email');
            const emailText = this.querySelector('.email-text');
            const copyMessage = this.querySelector('.copy-message');

            // Copy to clipboard
            navigator.clipboard.writeText(email).then(() => {
                // Visual feedback
                emailText.style.display = 'none';
                copyMessage.style.display = 'inline';

                // Change background color temporarily
                this.style.backgroundColor = '#10b981';
                this.style.color = 'white';
                this.style.borderColor = '#10b981';

                // Revert after 2 seconds
                setTimeout(() => {
                    emailText.style.display = 'inline';
                    copyMessage.style.display = 'none';
                    this.style.backgroundColor = '';
                    this.style.color = '';
                    this.style.borderColor = '';
                }, 2000);

            }).catch(err => {
                // Fallback: Open mailto link if clipboard fails
                console.log('Clipboard failed, opening mailto:', err);
                window.location.href = `mailto:${email}`;
            });
        });
    }

    // ===== FOOTER EMAIL COPY FUNCTIONALITY =====
    const footerEmailLink = document.querySelector('.email-icon-link');
    if (footerEmailLink) {
        footerEmailLink.addEventListener('click', function(e) {
            e.preventDefault();

            const email = this.getAttribute('data-email');

            // Copy to clipboard
            navigator.clipboard.writeText(email).then(() => {
                // Visual feedback for icon
                const originalHTML = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i>';
                this.style.color = '#10b981';

                // Revert after 2 seconds
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.style.color = '';
                }, 2000);

            }).catch(err => {
                // Fallback: Open mailto link if clipboard fails
                window.location.href = `mailto:${email}`;
            });
        });
    }

    // ===== MOBILE MENU =====
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('show');
            this.setAttribute('aria-expanded', navLinks.classList.contains('show'));
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-content')) {
                navLinks.classList.remove('show');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                navLinks.classList.remove('show');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('show');
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href === '#') return;

            const targetElement = document.querySelector(href);

            if (targetElement) {
                e.preventDefault();

                // Close mobile menu if open
                if (window.innerWidth <= 768 && navLinks) {
                    navLinks.classList.remove('show');
                    if (mobileMenuBtn) {
                        mobileMenuBtn.setAttribute('aria-expanded', 'false');
                    }
                }

                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                history.pushState(null, null, href);
            }
        });
    });

    // ===== ACTIVE NAV LINK =====
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-link');

    function setActiveLink() {
        let current = '';
        const scrollPosition = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinksAll.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);

    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===== CURRENT YEAR IN FOOTER =====
    const yearElements = document.querySelectorAll('.current-year');
    if (yearElements.length > 0) {
        const currentYear = new Date().getFullYear();
        yearElements.forEach(el => {
            el.textContent = currentYear;
        });
    }

    // ===== PRINT FUNCTIONALITY =====
    const printButton = document.querySelector('.print-btn');
    if (printButton) {
        printButton.addEventListener('click', function() {
            window.print();
        });
    }

    // ===== SIMPLE ANIMATIONS =====
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-category, .project-card, .highlight-item');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial state for animated elements
    document.querySelectorAll('.skill-category, .project-card, .highlight-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    // ===== FORM VALIDATION (IF ADDED LATER) =====
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });
});

// Backup: Hide loading screen when window fully loads
window.addEventListener('load', function() {
    setTimeout(() => {
        const loadingElement = document.getElementById('loading');
        if (loadingElement) {
            loadingElement.classList.add('hidden');
        }
    }, 1000); // Maximum 1 second wait
});
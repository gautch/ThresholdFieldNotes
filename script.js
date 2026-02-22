// Filter functionality for reports page
document.addEventListener('DOMContentLoaded', function() {
    const filterTags = document.querySelectorAll('.filter-tag');
    const reportCards = document.querySelectorAll('.report-card');
    
    if (filterTags.length > 0 && reportCards.length > 0) {
        // Add click event listeners to filter buttons
        filterTags.forEach(tag => {
            tag.addEventListener('click', function() {
                // Remove active class from all tags
                filterTags.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tag
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.textContent.trim().toLowerCase();
                
                // Filter report cards
                filterReports(filterValue);
            });
        });
        
        function filterReports(filter) {
            reportCards.forEach((card, index) => {
                if (filter === 'all reports') {
                    // Show all cards with staggered animation
                    setTimeout(() => {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    }, index * 50);
                } else {
                    // Check if card has the matching tag class
                    const reportTag = card.querySelector('.report-tag');
                    if (reportTag) {
                        const tagText = reportTag.textContent.trim().toLowerCase();
                        if (tagText === filter) {
                            // Show matching card
                            setTimeout(() => {
                                card.style.display = 'block';
                                setTimeout(() => {
                                    card.style.opacity = '1';
                                    card.style.transform = 'scale(1)';
                                }, 50);
                            }, index * 50);
                        } else {
                            // Hide non-matching card
                            card.style.opacity = '0';
                            card.style.transform = 'scale(0.9)';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
                        }
                    } else {
                        // If no tag found, hide the card
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.9)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        }
    }
    
    // Counter animation for stats
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const animate = () => {
            const value = +counter.getAttribute('data-target');
            const data = +counter.innerText;
            const time = value / speed;
            
            if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
            } else {
                counter.innerText = value;
            }
        }
        
        // Start animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
    
    // Smooth scroll for anchor links
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
    
    // Mobile menu toggle (if needed)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
});

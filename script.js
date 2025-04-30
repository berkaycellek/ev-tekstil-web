document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Mobil menü toggle
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Mobil dropdown toggle
    dropdowns.forEach(dropdown => {
        if (window.innerWidth <= 768) {
            dropdown.addEventListener('click', function(e) {
                e.preventDefault();
                this.classList.toggle('active');
            });
        }
    });

    // Sayfa dışına tıklandığında menüyü kapat
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-container')) {
            navLinks.classList.remove('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });
}); 
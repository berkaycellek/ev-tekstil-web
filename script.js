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
                // Sadece dropdown toggle'a tıklandığında menüyü aç/kapat
                if (e.target.classList.contains('dropdown-toggle')) {
                    e.preventDefault();
                    this.classList.toggle('active');
                }
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

    // Kategori kartlarını seç
    const categoryCards = document.querySelectorAll('.category-card');
    const searchInput = document.getElementById('categorySearch');
    const categoriesGrid = document.querySelector('.categories-grid');

    // Arama fonksiyonu
    function performSearch(searchTerm) {
        categoryCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.filter-tag')).map(tag => tag.textContent.toLowerCase());

            const matches = title.includes(searchTerm) || 
                          description.includes(searchTerm) || 
                          tags.some(tag => tag.includes(searchTerm));

            card.style.display = matches ? 'block' : 'none';
        });
    }

    // Arama input event listener
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        performSearch(searchTerm);
    });

    // Animasyon efekti için Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Her kategori kartına animasyon ekle
    categoryCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}); 
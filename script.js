document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Mobil menü toggle
    mobileMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        navLinks.classList.toggle('active');
    });

    // Mobil dropdown toggle
    dropdowns.forEach(dropdown => {
        if (window.innerWidth <= 768) {
            dropdown.addEventListener('click', function(e) {
                if (e.target.classList.contains('dropdown-toggle')) {
                    e.preventDefault();
                    e.stopPropagation();
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

    // Hakkında linklerini seç
    const aboutLinks = document.querySelectorAll('a[href="#hakkimizda"]');
    const aboutSection = document.getElementById('hakkimizda');

    // Hakkında linklerine tıklama olayı ekle
    aboutLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Mobil menüyü kapat
            navLinks.classList.remove('active');
            
            // Hakkımızda bölümüne yumuşak kaydırma
            aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Lazy Loading için Intersection Observer
    const lazyLoadObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                lazyLoadObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.1
    });

    // Lazy loading için resimleri seç
    document.querySelectorAll('img[data-src]').forEach(img => {
        lazyLoadObserver.observe(img);
    });

    // Animasyon için Intersection Observer
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Animasyonlu elementleri seç
    document.querySelectorAll('.lazy-load').forEach(element => {
        animationObserver.observe(element);
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

            const matches = title.includes(searchTerm) || 
                          description.includes(searchTerm);

            card.style.display = matches ? 'block' : 'none';
        });
    }

    // Arama input event listener
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        performSearch(searchTerm);
    });

    // Performans optimizasyonu için scroll event throttling
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                // Scroll ile ilgili işlemler
                ticking = false;
            });
            ticking = true;
        }
    });
}); 
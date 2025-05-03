document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');
    const menuItems = document.querySelectorAll('.nav-links a');

    // Mobil menü toggle
    mobileMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        
        // Her menü öğesine animasyon gecikmesi ekle
        menuItems.forEach((item, index) => {
            item.style.setProperty('--i', index);
        });
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

    // Blog bölümü paralaks efekti
    const blogSection = document.querySelector('.blog-section');
    const blogPattern = document.querySelector('.blog-background-pattern');
    
    if (blogSection && blogPattern) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const blogOffset = blogSection.offsetTop;
            const blogHeight = blogSection.offsetHeight;
            
            // Blog bölümü görünür alanda mı kontrol et
            if (scrollPosition > blogOffset - window.innerHeight && 
                scrollPosition < blogOffset + blogHeight) {
                
                // Paralaks efekti için hesaplama
                const progress = (scrollPosition - blogOffset) / blogHeight;
                const parallaxValue = progress * 50; // 50px maksimum hareket
                
                blogPattern.style.transform = `translateY(${-parallaxValue}px)`;
                
                // Arka plan gradyanını dinamik olarak güncelle
                const opacity = 0.95 - (progress * 0.1);
                blogSection.style.background = `linear-gradient(180deg, 
                    rgba(249, 246, 240, ${opacity}) 0%,
                    rgba(249, 246, 240, ${opacity - 0.05}) 50%,
                    rgba(249, 246, 240, ${opacity - 0.1}) 100%
                )`;
            }
        });
    }

    // Parçacık efekti
    function createParticles() {
        const container = document.querySelector('.particles-container');
        if (!container) {
            console.log('Particles container bulunamadı');
            return;
        }

        const particleCount = 30;
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;

        // Önceki parçacıkları temizle
        container.innerHTML = '';

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            // Rastgele boyut (5-10px)
            const size = Math.random() * 5 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            // Rastgele konum
            const x = Math.random() * containerWidth;
            const y = Math.random() * containerHeight;
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;

            // Rastgele animasyon süresi
            const duration = Math.random() * 10 + 10;
            particle.style.animationDuration = `${duration}s`;

            // Rastgele opaklık
            const opacity = Math.random() * 0.1 + 0.1;
            particle.style.opacity = opacity;

            container.appendChild(particle);
        }
    }

    // Sayfa yüklendiğinde ve resize olduğunda parçacıkları oluştur
    createParticles();
    
    // Pencere boyutu değiştiğinde parçacıkları yeniden oluştur
    window.addEventListener('resize', createParticles);

    // Blog filtreleme fonksiyonları
    const blogFilterButtons = document.querySelectorAll('.filter-btn');
    const blogSearchInput = document.querySelector('.blog-filters .search-box input');
    const blogPosts = document.querySelectorAll('.blog-post-card');

    // Filtreleme fonksiyonu
    function filterBlogPosts(category, searchTerm) {
        blogPosts.forEach(post => {
            const postCategory = post.querySelector('.blog-category-tag').textContent.toLowerCase();
            const postTitle = post.querySelector('.blog-post-title').textContent.toLowerCase();
            const postExcerpt = post.querySelector('.blog-post-excerpt').textContent.toLowerCase();

            const matchesCategory = category === 'tümü' || postCategory === category.toLowerCase();
            const matchesSearch = !searchTerm || 
                                postTitle.includes(searchTerm) || 
                                postExcerpt.includes(searchTerm);

            post.style.display = matchesCategory && matchesSearch ? 'block' : 'none';
        });
    }

    // Filtre butonlarına tıklama olayı ekle
    blogFilterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Aktif buton stilini güncelle
            blogFilterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filtreleme işlemini gerçekleştir
            const category = this.textContent;
            const searchTerm = blogSearchInput ? blogSearchInput.value.toLowerCase() : '';
            filterBlogPosts(category, searchTerm);
        });
    });

    // Arama kutusu için event listener
    if (blogSearchInput) {
        blogSearchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const activeCategory = document.querySelector('.filter-btn.active').textContent;
            filterBlogPosts(activeCategory, searchTerm);
        });
    }

    // Sayfa yüklendiğinde filtreleme durumunu kontrol et
    if (blogPosts.length > 0) {
        const activeCategory = document.querySelector('.filter-btn.active').textContent;
        const searchTerm = blogSearchInput ? blogSearchInput.value.toLowerCase() : '';
        filterBlogPosts(activeCategory, searchTerm);
    }
}); 
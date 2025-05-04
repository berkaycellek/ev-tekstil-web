class BlogDetail extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const title = this.getAttribute('title') || 'Blog Başlığı';
        const date = this.getAttribute('date') || '01 Ocak 2025';
        const category = this.getAttribute('category') || 'Kategori';
        const authorName = this.getAttribute('author-name') || 'Yazar Adı';
        const authorImage = this.getAttribute('author-image') || 'images/author.jpg';
        const authorRole = this.getAttribute('author-role') || 'Yazar';
        const featuredImage = this.getAttribute('featured-image') || 'images/blog/default.jpg';
        const content = this.innerHTML;
        
        // İçeriği temizle
        this.innerHTML = '';
        
        // Yeni tasarımı uygula
        this.innerHTML = `
            <div class="blog-detail-page">
                <div class="blog-detail-hero" style="background-image: url('${featuredImage}')">
                    <div class="blog-detail-overlay"></div>
                    <div class="blog-detail-container">
                        <div class="blog-detail-header">
                            <div class="blog-detail-category">${category}</div>
                            <h1 class="blog-detail-title">${title}</h1>
                            <div class="blog-detail-meta">
                                <div class="blog-detail-author">
                                    <img src="${authorImage}" alt="${authorName}">
                                    <div class="blog-detail-author-info">
                                        <span class="blog-detail-author-name">${authorName}</span>
                                        <span class="blog-detail-author-role">${authorRole}</span>
                                    </div>
                                </div>
                                <div class="blog-detail-date">
                                    <i class="far fa-calendar-alt"></i>
                                    <span>${date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="blog-detail-container">
                    <div class="blog-detail-content">
                        ${content}
                    </div>
                    
                    <div class="blog-detail-share">
                        <h3 class="blog-detail-share-title">Bu Yazıyı Paylaşın</h3>
                        <div class="blog-detail-share-buttons">
                            <a href="#" class="blog-detail-share-button" aria-label="Facebook'ta Paylaş">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="blog-detail-share-button" aria-label="Twitter'da Paylaş">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="blog-detail-share-button" aria-label="LinkedIn'de Paylaş">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" class="blog-detail-share-button" aria-label="WhatsApp'ta Paylaş">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div class="blog-detail-navigation">
                        <a href="#" class="blog-detail-nav-btn prev-post">
                            <i class="fas fa-arrow-left"></i>
                            <span>Önceki Yazı</span>
                        </a>
                        <a href="/pages/blog/index.html" class="blog-detail-nav-btn blog-index">
                            <i class="fas fa-th-large"></i>
                            <span>Tüm Yazılar</span>
                        </a>
                        <a href="#" class="blog-detail-nav-btn next-post">
                            <span>Sonraki Yazı</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                
                <div class="blog-detail-related">
                    <div class="blog-detail-container">
                        <h2 class="blog-detail-related-title">İlgili Yazılar</h2>
                        <div class="blog-detail-related-grid">
                            <!-- Burada ilgili blog kartları dinamik olarak eklenebilir -->
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('blog-detail', BlogDetail); 
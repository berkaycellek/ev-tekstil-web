class BlogSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section class="blog-section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Blog</h2>
                        <p class="section-subtitle">Ev dekorasyonu ve tekstil dünyasından en son trendler ve ipuçları</p>
                    </div>
                    <div class="blog-grid">
                        <blog-card
                            title="Ev Dekorasyonunda Tekstil Trendleri"
                            excerpt="2024'ün en popüler tekstil trendleri ve ev dekorasyonunda nasıl kullanılacağı hakkında ipuçları."
                            image="images/blog/dekorasyon-trendleri.jpg"
                            category="Dekorasyon"
                            date="15 Mart 2025"
                            author-name="Ersu Ahat"
                            author-image="images/author.jpg"
                            link="/pages/blog/dekorasyon-trendleri.html"
                        ></blog-card>

                        <blog-card
                            title="İlham Verici Dekorasyon Fikirleri"
                            excerpt="Yaşam alanlarınızı yeniden tasarlamak için modern ve şık dekorasyon fikirleri."
                            image="images/blog/dekorasyon-fikirleri.jpg"
                            category="İlham"
                            date="10 Mart 2025"
                            author-name="Ersu Ahat"
                            author-image="images/author.jpg"
                            link="/pages/blog/dekorasyon-fikirleri.html"
                        ></blog-card>

                        <blog-card
                            title="Ürün Bakım ve Kullanım Rehberleri"
                            excerpt="Ürünlerinizin ömrünü uzatmak için profesyonel bakım ve kullanım önerileri."
                            image="images/blog/urun-bakim.jpg"
                            category="Bakım"
                            date="5 Mart 2025"
                            author-name="Ersu Ahat"
                            author-image="images/author.jpg"
                            link="/pages/blog/urun-bakim.html"
                        ></blog-card>
                    </div>
                </div>
                <div class="blog-section-footer">
                    <a href="pages/blog/index.html" class="blog-cta-button">
                        Blog Sayfasına Git
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </section>
        `;
    }
}

customElements.define('blog-section', BlogSection); 
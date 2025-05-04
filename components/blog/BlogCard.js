class BlogCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const title = this.getAttribute('title');
        const excerpt = this.getAttribute('excerpt');
        const image = this.getAttribute('image');
        const category = this.getAttribute('category');
        const date = this.getAttribute('date');
        const authorName = this.getAttribute('author-name');
        const authorImage = this.getAttribute('author-image');
        const link = this.getAttribute('link');

        this.innerHTML = `
            <article class="blog-card">
                <a href="${link}" class="blog-link">
                    <div class="blog-image">
                        <img src="${image}" alt="${title}" loading="lazy">
                        <div class="blog-category-tag">${category}</div>
                        <div class="blog-date-tag">${date}</div>
                    </div>
                    <div class="blog-content">
                        <h3 class="blog-card-title">${title}</h3>
                        <p class="blog-excerpt">${excerpt}</p>
                        <div class="blog-meta">
                            <div class="blog-author">
                                <img src="${authorImage}" alt="Yazar" class="author-avatar">
                                <span class="author-name">${authorName}</span>
                            </div>
                            <div class="blog-cta">
                                <span>Devamını Oku</span>
                                <i class="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </a>
            </article>
        `;
    }
}

customElements.define('blog-card', BlogCard); 
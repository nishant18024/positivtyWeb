import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
    title?: string;
    metaTitle?: string;
    description?: string;
    keywords?: string;
}

@Injectable({
    providedIn: 'root'
})
export class SeoService {

    private readonly defaultTitle = 'Positivty - Your Path to Better Mental Health';
    private readonly defaultDescription = 'Positivty provides professional psychological support and mental health resources to help you live your best life.';

    constructor(private title: Title, private meta: Meta) { }

    /**
     * Updates all SEO related tags at once
     */
    updateSeoData(data: SeoData): void {
        this.setPageTitle(data.title);
        this.setMetaTitle(data.metaTitle || data.title);
        this.setMetaDescription(data.description);

        if (data.keywords) {
            this.meta.updateTag({ name: 'keywords', content: data.keywords });
        }
    }

    /**
     * Sets the browser tab title
     */
    setPageTitle(title?: string): void {
        const finalTitle = title ? `${title} | Positivty` : this.defaultTitle;
        this.title.setTitle(finalTitle);
    }

    /**
     * Sets the meta title tag (often same as page title but can differ)
     */
    setMetaTitle(title?: string): void {
        if (title) {
            this.meta.updateTag({ name: 'title', content: title });
            this.meta.updateTag({ property: 'og:title', content: title });
            this.meta.updateTag({ name: 'twitter:title', content: title });
        }
    }

    /**
     * Sets the meta description tag
     */
    setMetaDescription(description?: string): void {
        const finalDesc = description || this.defaultDescription;
        this.meta.updateTag({ name: 'description', content: finalDesc });
        this.meta.updateTag({ property: 'og:description', content: finalDesc });
        this.meta.updateTag({ name: 'twitter:description', content: finalDesc });
    }
}

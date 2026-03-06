import { inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { filter } from 'rxjs';

interface PageSeo {
  title: string;
  description: string;
}

const BASE_URL = 'https://royalceramicworld.ambikainfotech.online';
const OG_IMAGE = `${BASE_URL}/og-image.jpg`;

const DEFAULT_SEO: PageSeo = {
  title: 'Royal Ceramic World — Timeless Artistry',
  description:
    'Discover exquisite handcrafted ceramics blending ancient traditions with contemporary design. Shop dinnerware, decorative pieces, planters & ceramic art.',
};

const ROUTE_SEO: Record<string, PageSeo> = {
  '/home': DEFAULT_SEO,
  '/products': {
    title: 'All Products — Royal Ceramic World',
    description:
      'Browse our full collection of handcrafted ceramics — dinnerware, decorative vases, planters, and ceramic art sculptures.',
  },
  '/about': {
    title: 'About Us — Royal Ceramic World',
    description:
      'Learn about the artisans behind Royal Ceramic World and our commitment to preserving ancient ceramic traditions with modern artistry.',
  },
  '/contact': {
    title: 'Contact Us — Royal Ceramic World',
    description:
      'Get in touch with Royal Ceramic World for product enquiries, custom orders, or wholesale pricing.',
  },
  '/collections/dinnerware': {
    title: 'Dinnerware Collection — Royal Ceramic World',
    description:
      'Handcrafted ceramic dinnerware sets crafted for everyday elegance and special occasions.',
  },
  '/collections/decorative': {
    title: 'Decorative Collection — Royal Ceramic World',
    description:
      'Stunning decorative ceramic pieces to elevate your home interiors with timeless artistry.',
  },
  '/collections/planters': {
    title: 'Planters Collection — Royal Ceramic World',
    description:
      'Beautiful handcrafted ceramic planters that bring nature and artistry together.',
  },
  '/collections/art': {
    title: 'Art & Sculpture Collection — Royal Ceramic World',
    description:
      'One-of-a-kind ceramic art sculptures and unique artistic pieces from our master artisans.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy — Royal Ceramic World',
    description:
      'How Royal Ceramic World collects, uses, and protects your personal information.',
  },
  '/terms': {
    title: 'Terms of Service — Royal Ceramic World',
    description:
      'Read the terms and conditions governing the use of Royal Ceramic World website and the purchase of our products.',
  },
  '/shipping': {
    title: 'Shipping Info — Royal Ceramic World',
    description:
      'Shipping rates, estimated delivery times, and packaging details for Royal Ceramic World orders.',
  },
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  private router = inject(Router);
  private titleSvc = inject(Title);
  private meta = inject(Meta);

  init(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this.update(e.urlAfterRedirects.split('?')[0]));
  }

  private update(url: string): void {
    const seo = ROUTE_SEO[url] ?? this.dynamicCollectionMeta(url) ?? DEFAULT_SEO;
    const canonicalUrl = `${BASE_URL}${url}`;

    this.titleSvc.setTitle(seo.title);

    this.meta.updateTag({ name: 'description', content: seo.description });

    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:image', content: OG_IMAGE });

    this.meta.updateTag({ name: 'twitter:title', content: seo.title });
    this.meta.updateTag({ name: 'twitter:description', content: seo.description });
    this.meta.updateTag({ name: 'twitter:image', content: OG_IMAGE });

    // Update canonical link
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      canonical.href = canonicalUrl;
    }

    this.updateBreadcrumb(url);
  }

  private updateBreadcrumb(url: string): void {
    const LABELS: Record<string, string> = {
      '/products': 'All Products',
      '/about': 'About Us',
      '/contact': 'Contact',
      '/privacy-policy': 'Privacy Policy',
      '/terms': 'Terms of Service',
      '/shipping': 'Shipping Info',
    };

    const items: Array<{ '@type': string; position: number; name: string; item?: string }> = [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/home` },
    ];

    if (url !== '/home') {
      if (url.startsWith('/collections/')) {
        items.push({ '@type': 'ListItem', position: 2, name: 'Products', item: `${BASE_URL}/products` });
        const slug = url.replace('/collections/', '');
        const name = slug.charAt(0).toUpperCase() + slug.slice(1);
        items.push({ '@type': 'ListItem', position: 3, name });
      } else {
        const label = LABELS[url] ?? url.replace('/', '');
        items.push({ '@type': 'ListItem', position: 2, name: label });
      }
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items,
    };

    let el = document.getElementById('rcw-breadcrumb-ld') as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement('script');
      el.type = 'application/ld+json';
      el.id = 'rcw-breadcrumb-ld';
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schema);
  }

  private dynamicCollectionMeta(url: string): PageSeo | null {
    if (!url.startsWith('/collections/')) return null;
    const slug = url.replace('/collections/', '');
    const name = slug.charAt(0).toUpperCase() + slug.slice(1);
    return {
      title: `${name} Collection — Royal Ceramic World`,
      description: `Explore our handcrafted ${name.toLowerCase()} ceramic collection at Royal Ceramic World.`,
    };
  }
}

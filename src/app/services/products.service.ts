import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  category: string;
  collectionSlug: string;
  price: string;
  description: string;
  icon: string;
}

@Injectable({ providedIn: 'root' })
export class ProductsService {
  readonly all: Product[] = [
    {
      id: 1,
      name: 'Vases & Urns',
      category: 'Decorative',
      collectionSlug: 'decorative',
      price: 'From $45',
      description: 'Elegant vessels perfect for floral arrangements and home décor',
      icon: '🏺',
    },
    {
      id: 2,
      name: 'Dinnerware Sets',
      category: 'Tableware',
      collectionSlug: 'dinnerware',
      price: 'From $120',
      description: 'Artisan-crafted plates and bowls for dining excellence',
      icon: '🍽️',
    },
    {
      id: 3,
      name: 'Decorative Tiles',
      category: 'Architectural',
      collectionSlug: 'decorative',
      price: 'From $25',
      description: 'Hand-painted tiles for walls, floors, and artistic installations',
      icon: '🎨',
    },
    {
      id: 4,
      name: 'Teapots & Cups',
      category: 'Drinkware',
      collectionSlug: 'dinnerware',
      price: 'From $35',
      description: 'Traditional ceramic tea sets with modern design sensibilities',
      icon: '☕',
    },
    {
      id: 5,
      name: 'Sculptures',
      category: 'Art',
      collectionSlug: 'art',
      price: 'From $150',
      description: 'Limited edition ceramic art pieces and collectibles',
      icon: '🗿',
    },
    {
      id: 6,
      name: 'Planters & Pots',
      category: 'Garden',
      collectionSlug: 'planters',
      price: 'From $30',
      description: 'Beautifully crafted containers for indoor and outdoor gardens',
      icon: '🪴',
    },
  ];

  readonly collections: Record<string, { title: string; subtitle: string }> = {
    dinnerware: {
      title: 'Dinnerware',
      subtitle: 'Artisan-crafted tableware and drinkware sets for a refined dining experience',
    },
    decorative: {
      title: 'Decorative',
      subtitle: 'Hand-painted tiles, vases, and vessels that bring warmth and character to any space',
    },
    planters: {
      title: 'Planters',
      subtitle: 'Beautifully shaped containers for indoor and outdoor greenery',
    },
    art: {
      title: 'Art & Sculpture',
      subtitle: 'Limited edition ceramic art pieces and collectibles crafted by master artisans',
    },
  };

  getBySlug(slug: string): Product[] {
    return this.all.filter((p) => p.collectionSlug === slug);
  }
}

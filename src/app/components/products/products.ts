import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './products.html',
  styleUrl: './products.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Vases & Urns',
      category: 'Decorative',
      price: 'From $45',
      description: 'Elegant vessels perfect for floral arrangements and home décor',
      icon: '🏺',
    },
    {
      id: 2,
      name: 'Dinnerware Sets',
      category: 'Tableware',
      price: 'From $120',
      description: 'Artisan-crafted plates and bowls for dining excellence',
      icon: '🍽️',
    },
    {
      id: 3,
      name: 'Decorative Tiles',
      category: 'Architectural',
      price: 'From $25',
      description: 'Hand-painted tiles for walls, floors, and artistic installations',
      icon: '🎨',
    },
    {
      id: 4,
      name: 'Teapots & Cups',
      category: 'Drinkware',
      price: 'From $35',
      description: 'Traditional ceramic tea sets with modern design sensibilities',
      icon: '☕',
    },
    {
      id: 5,
      name: 'Sculptures',
      category: 'Art',
      price: 'From $150',
      description: 'Limited edition ceramic art pieces and collectibles',
      icon: '🗿',
    },
    {
      id: 6,
      name: 'Planters & Pots',
      category: 'Garden',
      price: 'From $30',
      description: 'Beautifully crafted containers for indoor and outdoor gardens',
      icon: '🪴',
    },
  ];
}

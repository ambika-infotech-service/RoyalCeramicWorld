import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-collection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen" style="background-color: var(--color-ceramic-50);">
      <!-- Hero banner -->
      <div class="py-20 text-center border-b relative overflow-hidden" style="background: white; border-color: var(--color-ceramic-100);">
        <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 60% 0%, rgba(217,162,27,0.07), transparent 60%);"></div>
        <div class="max-w-3xl mx-auto px-4 relative z-10">
          <!-- Breadcrumb -->
          <nav aria-label="Breadcrumb" class="flex items-center justify-center gap-2 text-sm mb-8" style="color: var(--color-ceramic-500);">
            <a routerLink="/home" class="hover:text-ceramic-800 transition-colors duration-200">Home</a>
            <span>/</span>
            <a routerLink="/products" class="hover:text-ceramic-800 transition-colors duration-200">Products</a>
            <span>/</span>
            <span style="color: var(--color-ceramic-800);">{{ meta().title }}</span>
          </nav>

          <div class="inline-flex items-center gap-3 mb-5">
            <div class="h-px w-10" style="background: var(--color-gold-500);"></div>
            <span class="text-xs font-semibold tracking-[0.25em] uppercase" style="color: var(--color-gold-600);">Collection</span>
            <div class="h-px w-10" style="background: var(--color-gold-500);"></div>
          </div>
          <h1 class="text-4xl md:text-5xl font-serif font-bold mb-4" style="color: var(--color-ceramic-900);">{{ meta().title }}</h1>
          <p class="text-lg" style="color: var(--color-ceramic-600);">{{ meta().subtitle }}</p>
        </div>
      </div>

      <!-- Products grid -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        @if (products().length === 0) {
          <div class="text-center py-24">
            <p class="text-6xl mb-6">🏺</p>
            <h2 class="text-2xl font-serif font-bold mb-2" style="color: var(--color-ceramic-900);">No items found</h2>
            <p class="mb-8" style="color: var(--color-ceramic-600);">This collection is coming soon.</p>
            <a routerLink="/products" class="px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 text-white inline-block" style="background: var(--color-ceramic-800);">View All Products</a>
          </div>
        } @else {
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (product of products(); track product.id) {
              <div class="group bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300" style="border-color: var(--color-ceramic-100);">
                <div class="relative p-8 h-52 flex flex-col items-center justify-center overflow-hidden" style="background: linear-gradient(135deg, var(--color-ceramic-50), var(--color-clay-50));">
                  <div class="absolute top-0 right-0 w-32 h-32 rounded-full translate-x-10 -translate-y-10 opacity-30" style="background: var(--color-gold-200);"></div>
                  <div class="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10">{{ product.icon }}</div>
                  <h2 class="text-lg font-serif font-bold text-center relative z-10" style="color: var(--color-ceramic-900);">{{ product.name }}</h2>
                </div>
                <div class="p-6">
                  <span class="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wide uppercase border" style="background: var(--color-gold-50); color: var(--color-gold-700); border-color: var(--color-gold-200);">{{ product.category }}</span>
                  <p class="text-sm leading-relaxed" style="color: var(--color-ceramic-600);">{{ product.description }}</p>
                  <div class="flex items-center justify-between mt-5 pt-4" style="border-top: 1px solid var(--color-ceramic-100);">
                    <p class="font-bold text-xl font-serif" style="color: var(--color-ceramic-900);">{{ product.price }}</p>
                    <a routerLink="/contact" class="text-sm font-semibold flex items-center gap-1 transition-colors duration-200 hover:text-gold-600" style="color: var(--color-ceramic-500);">
                      Enquire
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            }
          </div>

          <div class="text-center mt-16">
            <a routerLink="/contact" class="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-xl text-white" style="background: var(--color-ceramic-900);">
              Enquire About This Collection
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
        }
      </div>
    </div>
  `,
})
export class CollectionComponent {
  private route = inject(ActivatedRoute);
  private productsSvc = inject(ProductsService);

  private slug = toSignal(this.route.paramMap.pipe(map((p) => p.get('slug') ?? '')), { initialValue: '' });

  products = computed(() => this.productsSvc.getBySlug(this.slug()));
  meta = computed(() => this.productsSvc.collections[this.slug()] ?? { title: this.slug(), subtitle: '' });
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen" style="background-color: var(--color-ceramic-50);">
      <!-- Page Header -->
      <div class="py-20 text-center border-b" style="background: white; border-color: var(--color-ceramic-100);">
        <div class="max-w-3xl mx-auto px-4">
          <nav aria-label="Breadcrumb" class="flex items-center justify-center gap-2 text-sm mb-8" style="color: var(--color-ceramic-500);">
            <a routerLink="/home" class="hover:underline transition-colors duration-200">Home</a>
            <span>/</span>
            <span style="color: var(--color-ceramic-800);">Terms of Service</span>
          </nav>
          <div class="inline-flex items-center gap-3 mb-5">
            <div class="h-px w-10" style="background: var(--color-gold-500);"></div>
            <span class="text-xs font-semibold tracking-[0.25em] uppercase" style="color: var(--color-gold-600);">Legal</span>
            <div class="h-px w-10" style="background: var(--color-gold-500);"></div>
          </div>
          <h1 class="text-4xl md:text-5xl font-serif font-bold" style="color: var(--color-ceramic-900);">Terms of Service</h1>
          <p class="mt-3 text-sm" style="color: var(--color-ceramic-500);">Last updated: June 2025</p>
        </div>
      </div>

      <!-- Content -->
      <div class="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div class="bg-white rounded-2xl p-8 md:p-12 shadow-sm border space-y-10" style="border-color: var(--color-ceramic-100);">

          <section>
            <h2 class="text-2xl font-serif font-bold mb-4" style="color: var(--color-ceramic-900);">1. Acceptance of Terms</h2>
            <p class="leading-relaxed" style="color: var(--color-ceramic-600);">By accessing and using the Royal Ceramic World website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
          </section>

          <div class="h-px" style="background: var(--color-ceramic-100);"></div>

          <section>
            <h2 class="text-2xl font-serif font-bold mb-4" style="color: var(--color-ceramic-900);">2. Products & Descriptions</h2>
            <p class="leading-relaxed" style="color: var(--color-ceramic-600);">All our ceramics are handcrafted, which means slight variations in colour, texture, and dimensions are natural and expected — they are part of what makes each piece unique. Product images are representative and actual items may vary slightly from photographs.</p>
          </section>

          <div class="h-px" style="background: var(--color-ceramic-100);"></div>

          <section>
            <h2 class="text-2xl font-serif font-bold mb-4" style="color: var(--color-ceramic-900);">3. Ordering & Payment</h2>
            <p class="leading-relaxed mb-3" style="color: var(--color-ceramic-600);">Orders are confirmed only upon receipt of full payment or agreed deposit. We reserve the right to cancel or refuse any order. Prices are subject to change without notice.</p>
            <p class="leading-relaxed" style="color: var(--color-ceramic-600);">Custom and bespoke orders require a non-refundable deposit before production begins.</p>
          </section>

          <div class="h-px" style="background: var(--color-ceramic-100);"></div>

          <section>
            <h2 class="text-2xl font-serif font-bold mb-4" style="color: var(--color-ceramic-900);">4. Returns & Refunds</h2>
            <p class="leading-relaxed mb-3" style="color: var(--color-ceramic-600);">We take great care in packaging our ceramics. If an item arrives damaged, please notify us within 48 hours with photos and we will arrange a replacement or refund.</p>
            <p class="leading-relaxed" style="color: var(--color-ceramic-600);">Returns are accepted within 14 days of receipt for unused items in original packaging. Custom orders are non-returnable unless defective.</p>
          </section>

          <div class="h-px" style="background: var(--color-ceramic-100);"></div>

          <section>
            <h2 class="text-2xl font-serif font-bold mb-4" style="color: var(--color-ceramic-900);">5. Intellectual Property</h2>
            <p class="leading-relaxed" style="color: var(--color-ceramic-600);">All content on this website — including designs, images, text, and branding — is the property of Royal Ceramic World. You may not reproduce, distribute, or use any content without prior written permission.</p>
          </section>

          <div class="h-px" style="background: var(--color-ceramic-100);"></div>

          <section>
            <h2 class="text-2xl font-serif font-bold mb-4" style="color: var(--color-ceramic-900);">6. Limitation of Liability</h2>
            <p class="leading-relaxed" style="color: var(--color-ceramic-600);">Royal Ceramic World shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our total liability shall not exceed the value of the product purchased.</p>
          </section>

          <div class="h-px" style="background: var(--color-ceramic-100);"></div>

          <section>
            <h2 class="text-2xl font-serif font-bold mb-4" style="color: var(--color-ceramic-900);">7. Governing Law</h2>
            <p class="leading-relaxed" style="color: var(--color-ceramic-600);">These terms are governed by applicable law. Any disputes shall be resolved through good-faith negotiation before pursuing formal legal proceedings.</p>
          </section>

          <div class="h-px" style="background: var(--color-ceramic-100);"></div>

          <section>
            <h2 class="text-2xl font-serif font-bold mb-4" style="color: var(--color-ceramic-900);">8. Contact Us</h2>
            <p class="leading-relaxed" style="color: var(--color-ceramic-600);">Questions about these Terms of Service? Please <a routerLink="/contact" class="font-semibold underline" style="color: var(--color-gold-700);">get in touch with us</a>.</p>
          </section>

        </div>
      </div>
    </div>
  `,
})
export class TermsComponent {}

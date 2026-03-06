import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shipping',
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
            <span style="color: var(--color-ceramic-800);">Shipping Info</span>
          </nav>
          <div class="inline-flex items-center gap-3 mb-5">
            <div class="h-px w-10" style="background: var(--color-gold-500);"></div>
            <span class="text-xs font-semibold tracking-[0.25em] uppercase" style="color: var(--color-gold-600);">Delivery</span>
            <div class="h-px w-10" style="background: var(--color-gold-500);"></div>
          </div>
          <h1 class="text-4xl md:text-5xl font-serif font-bold" style="color: var(--color-ceramic-900);">Shipping Information</h1>
          <p class="mt-4 text-lg max-w-xl mx-auto" style="color: var(--color-ceramic-600);">We handle every piece with the care it deserves, from our studio to your door.</p>
        </div>
      </div>

      <!-- Content -->
      <div class="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-8">

        <!-- Cards row -->
        <div class="grid sm:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl p-6 text-center border shadow-sm" style="border-color: var(--color-ceramic-100);">
            <div class="text-4xl mb-3">📦</div>
            <h3 class="font-serif font-bold mb-1" style="color: var(--color-ceramic-900);">Careful Packaging</h3>
            <p class="text-sm" style="color: var(--color-ceramic-600);">Every item is individually wrapped and cushioned to prevent breakage in transit.</p>
          </div>
          <div class="bg-white rounded-2xl p-6 text-center border shadow-sm" style="border-color: var(--color-ceramic-100);">
            <div class="text-4xl mb-3">🚚</div>
            <h3 class="font-serif font-bold mb-1" style="color: var(--color-ceramic-900);">Reliable Delivery</h3>
            <p class="text-sm" style="color: var(--color-ceramic-600);">We partner with trusted couriers to ensure your ceramics arrive safely on time.</p>
          </div>
          <div class="bg-white rounded-2xl p-6 text-center border shadow-sm" style="border-color: var(--color-ceramic-100);">
            <div class="text-4xl mb-3">🌍</div>
            <h3 class="font-serif font-bold mb-1" style="color: var(--color-ceramic-900);">Nationwide Reach</h3>
            <p class="text-sm" style="color: var(--color-ceramic-600);">We deliver across India with select export options available on request.</p>
          </div>
        </div>

        <!-- Detailed info -->
        <div class="bg-white rounded-2xl p-8 md:p-12 shadow-sm border space-y-10" style="border-color: var(--color-ceramic-100);">

          <section>
            <h2 class="text-2xl font-serif font-bold mb-4" style="color: var(--color-ceramic-900);">Processing Time</h2>
            <p class="leading-relaxed mb-3" style="color: var(--color-ceramic-600);">In-stock items are dispatched within <strong>2–3 business days</strong> of order confirmation.</p>
            <p class="leading-relaxed" style="color: var(--color-ceramic-600);">Custom and made-to-order pieces typically take <strong>4–8 weeks</strong> as they are crafted by hand. You will receive an estimated timeline when you place your order.</p>
          </section>

          <div class="h-px" style="background: var(--color-ceramic-100);"></div>

          <section>
            <h2 class="text-2xl font-serif font-bold mb-4" style="color: var(--color-ceramic-900);">Domestic Shipping (India)</h2>
            <div class="overflow-hidden rounded-xl border" style="border-color: var(--color-ceramic-100);">
              <table class="w-full text-sm">
                <thead>
                  <tr style="background: var(--color-ceramic-50);">
                    <th class="text-left px-5 py-3 font-semibold" style="color: var(--color-ceramic-800);">Order Value</th>
                    <th class="text-left px-5 py-3 font-semibold" style="color: var(--color-ceramic-800);">Estimated Delivery</th>
                    <th class="text-left px-5 py-3 font-semibold" style="color: var(--color-ceramic-800);">Shipping Fee</th>
                  </tr>
                </thead>
                <tbody style="color: var(--color-ceramic-600);">
                  <tr class="border-t" style="border-color: var(--color-ceramic-100);">
                    <td class="px-5 py-3">Below ₹2,000</td>
                    <td class="px-5 py-3">5–7 business days</td>
                    <td class="px-5 py-3">₹150</td>
                  </tr>
                  <tr class="border-t" style="border-color: var(--color-ceramic-100);">
                    <td class="px-5 py-3">₹2,000 – ₹5,000</td>
                    <td class="px-5 py-3">5–7 business days</td>
                    <td class="px-5 py-3">₹100</td>
                  </tr>
                  <tr class="border-t" style="border-color: var(--color-ceramic-100);">
                    <td class="px-5 py-3">Above ₹5,000</td>
                    <td class="px-5 py-3">5–7 business days</td>
                    <td class="px-5 py-3 font-semibold" style="color: var(--color-gold-700);">Free</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div class="h-px" style="background: var(--color-ceramic-100);"></div>

          <section>
            <h2 class="text-2xl font-serif font-bold mb-4" style="color: var(--color-ceramic-900);">International Shipping</h2>
            <p class="leading-relaxed" style="color: var(--color-ceramic-600);">We do offer international shipping for select items. Rates and delivery times vary by destination. <a routerLink="/contact" class="font-semibold underline" style="color: var(--color-gold-700);">Contact us</a> with your location and the items you are interested in for a custom quote.</p>
          </section>

          <div class="h-px" style="background: var(--color-ceramic-100);"></div>

          <section>
            <h2 class="text-2xl font-serif font-bold mb-4" style="color: var(--color-ceramic-900);">Damaged Items</h2>
            <p class="leading-relaxed" style="color: var(--color-ceramic-600);">Despite our careful packaging, accidents can happen during transit. If your order arrives damaged, please photograph the packaging and the item within 48 hours of receipt and <a routerLink="/contact" class="font-semibold underline" style="color: var(--color-gold-700);">contact us immediately</a>. We will arrange a replacement or refund promptly.</p>
          </section>

          <div class="h-px" style="background: var(--color-ceramic-100);"></div>

          <section>
            <h2 class="text-2xl font-serif font-bold mb-4" style="color: var(--color-ceramic-900);">Tracking Your Order</h2>
            <p class="leading-relaxed" style="color: var(--color-ceramic-600);">Once your order is dispatched, you will receive a tracking number via email or WhatsApp. You can use this to monitor your delivery in real time.</p>
          </section>

        </div>

        <!-- CTA -->
        <div class="text-center py-4">
          <p class="mb-5" style="color: var(--color-ceramic-600);">Have questions about your order?</p>
          <a routerLink="/contact" class="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-xl text-white" style="background: var(--color-ceramic-900);">
            Contact Us
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>

      </div>
    </div>
  `,
})
export class ShippingComponent {}

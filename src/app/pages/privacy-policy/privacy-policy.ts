import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
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
            <span style="color: var(--color-ceramic-800);">Privacy Policy</span>
          </nav>
          <div class="inline-flex items-center gap-3 mb-5">
            <div class="h-px w-10" style="background: var(--color-gold-500);"></div>
            <span class="text-xs font-semibold tracking-[0.25em] uppercase" style="color: var(--color-gold-600);">Legal</span>
            <div class="h-px w-10" style="background: var(--color-gold-500);"></div>
          </div>
          <h1 class="text-4xl md:text-5xl font-serif font-bold" style="color: var(--color-ceramic-900);">Privacy Policy</h1>
          <p class="mt-3 text-sm" style="color: var(--color-ceramic-500);">Last updated: June 2025</p>
        </div>
      </div>

      <!-- Content -->
      <div class="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div class="bg-white rounded-2xl p-8 md:p-12 shadow-sm border space-y-10" style="border-color: var(--color-ceramic-100);">

          <section>
            <h2 class="text-2xl font-serif font-bold mb-4" style="color: var(--color-ceramic-900);">1. Information We Collect</h2>
            <p class="leading-relaxed mb-3" style="color: var(--color-ceramic-600);">We collect information you provide directly to us when you contact us through our website, place an order, or communicate with us. This may include:</p>
            <ul class="list-disc list-inside space-y-1 text-sm" style="color: var(--color-ceramic-600);">
              <li>Name and contact details (email address, phone number)</li>
              <li>Delivery address and billing information</li>
              <li>Product enquiries and correspondence</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </section>

          <div class="h-px" style="background: var(--color-ceramic-100);"></div>

          <section>
            <h2 class="text-2xl font-serif font-bold mb-4" style="color: var(--color-ceramic-900);">2. How We Use Your Information</h2>
            <p class="leading-relaxed mb-3" style="color: var(--color-ceramic-600);">We use the information we collect to:</p>
            <ul class="list-disc list-inside space-y-1 text-sm" style="color: var(--color-ceramic-600);">
              <li>Process and fulfil your orders</li>
              <li>Communicate with you about your enquiries and orders</li>
              <li>Send you information about our products and promotions (with your consent)</li>
              <li>Improve our website and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <div class="h-px" style="background: var(--color-ceramic-100);"></div>

          <section>
            <h2 class="text-2xl font-serif font-bold mb-4" style="color: var(--color-ceramic-900);">3. Information Sharing</h2>
            <p class="leading-relaxed" style="color: var(--color-ceramic-600);">We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required to fulfil your orders (e.g. delivery partners) or as required by law.</p>
          </section>

          <div class="h-px" style="background: var(--color-ceramic-100);"></div>

          <section>
            <h2 class="text-2xl font-serif font-bold mb-4" style="color: var(--color-ceramic-900);">4. Data Security</h2>
            <p class="leading-relaxed" style="color: var(--color-ceramic-600);">We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <div class="h-px" style="background: var(--color-ceramic-100);"></div>

          <section>
            <h2 class="text-2xl font-serif font-bold mb-4" style="color: var(--color-ceramic-900);">5. Cookies</h2>
            <p class="leading-relaxed" style="color: var(--color-ceramic-600);">Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some functionality of the site.</p>
          </section>

          <div class="h-px" style="background: var(--color-ceramic-100);"></div>

          <section>
            <h2 class="text-2xl font-serif font-bold mb-4" style="color: var(--color-ceramic-900);">6. Your Rights</h2>
            <p class="leading-relaxed mb-3" style="color: var(--color-ceramic-600);">You have the right to:</p>
            <ul class="list-disc list-inside space-y-1 text-sm" style="color: var(--color-ceramic-600);">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
          </section>

          <div class="h-px" style="background: var(--color-ceramic-100);"></div>

          <section>
            <h2 class="text-2xl font-serif font-bold mb-4" style="color: var(--color-ceramic-900);">7. Contact Us</h2>
            <p class="leading-relaxed" style="color: var(--color-ceramic-600);">If you have any questions about this Privacy Policy or how we handle your data, please <a routerLink="/contact" class="font-semibold underline" style="color: var(--color-gold-700);">contact us</a>.</p>
          </section>

        </div>
      </div>
    </div>
  `,
})
export class PrivacyPolicyComponent {}

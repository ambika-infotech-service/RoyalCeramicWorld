import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [],
  template: `
    <a
      href="https://wa.me/1234567890?text=Hey!%20I%20am%20interested%20to%20see%20your%20ceramic%20collection.%20Could%20you%20please%20share%20more%20details%3F%20%F0%9F%8F%BA"
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-button"
      aria-label="Contact us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" class="whatsapp-icon">
        <path fill="currentColor" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.923 0-7.435 6.065-13.5 13.5-13.5s13.5 6.065 13.5 13.5-6.065 13.5-13.5 13.5zM21.803 19.288c-0.288-0.144-1.713-0.845-1.978-0.942s-0.458-0.144-0.651 0.144c-0.192 0.288-0.745 0.942-0.913 1.134s-0.336 0.216-0.624 0.072c-0.288-0.144-1.214-0.448-2.313-1.428-0.855-0.762-1.432-1.704-1.599-1.992s-0.017-0.445 0.126-0.589c0.13-0.13 0.288-0.337 0.432-0.505s0.192-0.288 0.288-0.48c0.096-0.192 0.048-0.36-0.024-0.504s-0.651-1.569-0.892-2.149c-0.236-0.564-0.476-0.487-0.651-0.496-0.168-0.008-0.36-0.010-0.553-0.010s-0.504 0.072-0.768 0.36c-0.264 0.288-1.009 0.985-1.009 2.402s1.033 2.786 1.177 2.978c0.144 0.192 2.033 3.104 4.926 4.353 0.688 0.296 1.225 0.473 1.643 0.605 0.691 0.219 1.319 0.188 1.816 0.114 0.553-0.083 1.713-0.7 1.954-1.376s0.241-1.257 0.168-1.376c-0.072-0.12-0.264-0.192-0.553-0.336z"/>
      </svg>
    </a>
  `,
  styles: `
    .whatsapp-button {
      position: fixed;
      bottom: var(--space-6);
      right: var(--space-6);
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
      border-radius: var(--radius-full);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow-lg);
      z-index: var(--z-fixed);
      transition: all var(--transition-base);
      cursor: pointer;
      color: var(--color-white);
    }

    .whatsapp-button:hover {
      transform: scale(1.1);
      box-shadow: var(--shadow-2xl);
    }

    .whatsapp-button:active {
      transform: scale(0.95);
    }

    .whatsapp-icon {
      width: 32px;
      height: 32px;
    }

    @media (max-width: 768px) {
      .whatsapp-button {
        width: 56px;
        height: 56px;
        bottom: var(--space-4);
        right: var(--space-4);
      }

      .whatsapp-icon {
        width: 28px;
        height: 28px;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappButtonComponent {}

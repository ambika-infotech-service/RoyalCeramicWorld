import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollAnimateDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  submitMessage = signal<string>('');

  onSubmit() {
    if (this.form.name && this.form.email && this.form.subject && this.form.message) {
      this.submitMessage.set('Thank you! We have received your message and will get back to you soon.');
      this.form = { name: '', email: '', subject: '', message: '' };
      setTimeout(() => this.submitMessage.set(''), 5000);
    }
  }
}

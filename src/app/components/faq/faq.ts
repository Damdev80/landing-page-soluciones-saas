import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styles: ``,
})
export class Faq {
  openFaq = signal<number | null>(null);

  toggleFaq(index: number) {
    this.openFaq.update(current => current === index ? null : index);
  }
}

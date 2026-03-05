import { Component, signal, inject, OnInit } from '@angular/core';
import { Footer } from '../layout/footer/footer';
import { Header } from '../layout/header/header';
import { Body } from '../layout/body/body';
import { ThemeService } from '../shared/service/theme';

@Component({
  selector: 'app-root',
  imports: [Footer, Header, Body],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('landing-page');
  private theme = inject(ThemeService);

  ngOnInit() {
    this.theme.apply();
  }
}

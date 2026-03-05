import { Component, signal } from '@angular/core';
import { Footer } from '../layout/footer/footer';
import { Header } from '../layout/header/header';
import { Body } from '../layout/body/body';
@Component({
  selector: 'app-root',
  imports: [Footer, Header, Body],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('landing-page');
}

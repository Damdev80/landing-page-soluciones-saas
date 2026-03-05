import { Component, inject } from '@angular/core';
import { ThemeService } from '../../shared/service/theme';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
})
export class Header {
  private theme = inject(ThemeService);
  isDark = this.theme.isDark;

  toggleTheme() {
    this.theme.toggle();
  }
} 

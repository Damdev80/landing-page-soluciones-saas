import { Component, inject } from '@angular/core';
import { ThemeService } from '../../shared/service/theme';
@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
})
export class Navbar {
  private theme = inject(ThemeService);
  isDark = this.theme.isDark;

  toggleTheme() {
    this.theme.toggle();
  }
}

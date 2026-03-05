import { Component} from '@angular/core';
import { Navbar } from '../../feature/navbar/navbar';
@Component({
  standalone: true,
  selector: 'app-header',
  imports: [Navbar],
  templateUrl: './header.html',
})
export class Header {} 

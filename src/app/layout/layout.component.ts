import { Component } from '@angular/core';
import { HeaderContentComponent } from './header-content/header-content.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderContentComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}

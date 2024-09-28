import { Component, inject } from '@angular/core';
import { HeaderContentComponent } from './header-content/header-content.component';
import { NavContentComponent } from './nav-content/nav-content.component';
import { ListProductsComponent } from "../components/list-products/list-products.component";
import { LayoutService } from './layout.service';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderContentComponent,
    NavContentComponent,
    ListProductsComponent,
    FooterContentComponent,
    RouterOutlet
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  private readonly _layout = inject(LayoutService);
}

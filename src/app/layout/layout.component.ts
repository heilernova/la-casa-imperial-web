import { Component, inject } from '@angular/core';
import { HeaderContentComponent } from './header-content/header-content.component';
import { NavContentComponent } from './nav-content/nav-content.component';
import { ListProductsComponent } from "../components/list-products/list-products.component";
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderContentComponent,
    NavContentComponent,
    ListProductsComponent
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  private readonly _layout = inject(LayoutService);
}

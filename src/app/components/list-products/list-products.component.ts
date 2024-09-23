import { Component, inject, signal } from '@angular/core';
import { ProductsService } from '../../api';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';


@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule,
    NzDropDownModule,
    NzMenuModule
  ],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent {
  private readonly _api = inject(ProductsService);

  public readonly listProducts = signal<any[]>([]);

  constructor(){
    this._api.get().subscribe(list => {
      this.listProducts.set(list as any[]);
    })
  }
}

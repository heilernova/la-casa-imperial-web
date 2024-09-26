import { Component, inject, signal } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDrawerModule, NzDrawerService } from 'ng-zorro-antd/drawer';
import { DrawerShoppingCardComponent } from '../drawer-shopping-card/drawer-shopping-card.component';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [
    NzButtonModule,
    NzModalModule,
    NzDrawerModule
  ],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.scss'
})
export class HeaderContentComponent {
  private readonly _drawerService = inject(NzDrawerService);
  private readonly _layout = inject(LayoutService);
  public isVisible = signal<boolean>(false);
  public iconTheme = signal<"fa-solid fa-moon" | "fa-solid fa-sun">("fa-solid fa-moon");

  constructor(){

  }

  onClickChangeTheme(): void {
    this.iconTheme.set(this.iconTheme() == "fa-solid fa-moon" ? "fa-solid fa-sun" : "fa-solid fa-moon");
    this._layout.changeTheme("dark");
  }

  showModal1(): void {
    this.isVisible.set(true);
  }

  onClickShowContact(){
    this.isVisible.set(true);
  }

  handleCancel(): void {
    this.isVisible.set(false);
  }

  openShoppingCard(): void {
    this._drawerService.create({
      nzTitle: "Carrito de compras",
      nzContent: DrawerShoppingCardComponent
    })
  }
}

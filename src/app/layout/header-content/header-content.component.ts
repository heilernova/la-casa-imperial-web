import { Component, signal } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [
    NzButtonModule,
    NzModalModule
  ],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.scss'
})
export class HeaderContentComponent {
  public isVisible = signal<boolean>(false);

  constructor(){

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
}

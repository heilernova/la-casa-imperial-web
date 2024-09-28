import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-content',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav-content.component.html',
  styleUrl: './nav-content.component.scss'
})
export class NavContentComponent {
  list = [
    {
      name: "Neveras y nevecones",
      link: "electrodomesticos/refrigeracion/neveras-y-nevecones"
    },
    {
      name: "Congeladores",
      link: "electrodomesticos/refrigeracion/congeladores"
    },
    {
      name: "Lavadoras",
      link: "electrodomesticos/lavado/lavadoras"
    },
    {
      name: "Televisores",
      link: "televisores"
    },
    {
      name: "Cocina",
      link: "electrodomesticos/cocina"
    },
    {
      name: "Climatización",
      link: "electrodomesticos/climatizacion"
    },
    {
      name: "Cuidad del hogar",
      link: "electrodomesticos/cuidado-del-hogar"
    },
  ];
}

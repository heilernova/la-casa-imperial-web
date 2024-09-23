import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-content',
  standalone: true,
  imports: [],
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
      link: "electrodomesticos/lavado/lavadoras"
    },
    {
      name: "Cocina",
      link: "electrodomesticos/lavado/lavadoras"
    },
    {
      name: "Climatización",
      link: "electrodomesticos/lavado/lavadoras"
    },
    {
      name: "Cuidad del hogar",
      link: "electrodomesticos/lavado/lavadoras"
    },
  ];
}

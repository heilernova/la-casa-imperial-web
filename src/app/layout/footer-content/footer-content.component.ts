import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-content',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './footer-content.component.html',
  styleUrl: './footer-content.component.scss'
})
export class FooterContentComponent {
  public readonly email: string = "buzon@lacasaimperial.com";
  public readonly cellphone: string = "(312) 526-8084";
  public readonly paymentMethods = signal<{ name: string, img: string }[]>([
    { name: "MasterCard", img: "/logos/pm-mastercard.png" },
    { name: "VISA", img: "/logos/pm-visa.png" },
    { name: "American Express", img: "/logos/pm-american-express.png" },
    { name: "PSE", img: "/logos/pm-pse.png" },
    { name: "Bancolombia", img: "/logos/pm-bancolombia.png" },
    { name: "Addi", img: "/logos/pm-addi.png" },
    { name: "Llano Gas", img: "/logos/pm-llanogas.png" },
  ]);
}

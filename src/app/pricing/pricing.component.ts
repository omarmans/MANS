import { Component } from '@angular/core';

interface Plan {
  name: string;
  i: string;
  price: string;
  Duration: string;
  Features: string[];
}
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent {
  title = 'Pricing';
  Prices: Plan[] = [
    {
      name: 'Basic',
      i: 'hosting-basic.png',
      price: '$15',
      Duration: 'Per Month',
      Features: [
        '10GB HDD Space',
        '5 Email Addresses',
        '2 Subdomains',
        '4 Databases',
        'Basic Support',
      ],
    },
    {
      name: 'Advanced',
      i: 'hosting-advanced.png',
      price: '$30',
      Duration: 'Per Month',
      Features: [
        '50GB HDD Space',
        '20 Email Addresses',
        '10 Subdomains',
        '15 Databases',
        'Priority Support',
      ],
    },
    {
      name: 'Professional',
      i: 'hosting-professional.png',
      price: '$50',
      Duration: 'Per Month',
      Features: [
        '200GB HDD Space',
        'Unlimited Email Addresses',
        '50 Subdomains',
        'Unlimited Databases',
        '24/7 Premium Support',
      ],
    },
  ];
}

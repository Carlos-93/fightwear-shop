import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Pants } from './pants/pants';
import { Sweatshirts } from './sweatshirts/sweatshirts';
import { Tshirts } from './tshirts/tshirts';

@Component({
  selector: 'app-products',
  imports: [Pants, Sweatshirts, Tshirts],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  constructor(private router: Router) { }

  navigateProduct(category: string) {
    this.router.navigate([`/products/${category}`]);
  }
}
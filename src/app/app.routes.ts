import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Sweatshirts } from './pages/products/sweatshirts/sweatshirts';
import { Pants } from './pages/products/pants/pants';
import { Tshirts } from './pages/products/tshirts/tshirts';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: Products },
  { path: 'products/:id', component: ProductDetail },
  { path: 'products/tshirts', component: Tshirts },
  { path: 'products/sweatshirts', component: Sweatshirts },
  { path: 'products/pants', component: Pants },
];
import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero';
import { ProductsComponent } from './components/products/products';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HeroComponent,
    title: 'Home - Royal Ceramic World',
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Products - Royal Ceramic World',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Us - Royal Ceramic World',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact - Royal Ceramic World',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

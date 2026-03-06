import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero';
import { ProductsComponent } from './components/products/products';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { CollectionComponent } from './pages/collection/collection';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy';
import { TermsComponent } from './pages/terms/terms';
import { ShippingComponent } from './pages/shipping/shipping';

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
    path: 'collections/:slug',
    component: CollectionComponent,
    title: 'Collection - Royal Ceramic World',
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    title: 'Privacy Policy - Royal Ceramic World',
  },
  {
    path: 'terms',
    component: TermsComponent,
    title: 'Terms of Service - Royal Ceramic World',
  },
  {
    path: 'shipping',
    component: ShippingComponent,
    title: 'Shipping Info - Royal Ceramic World',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

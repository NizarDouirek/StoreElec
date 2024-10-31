import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AcceuilComponent } from './admin/acceuil/acceuil.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { AdminComponent } from './admin/admin.component';
import { MessagesComponent } from './admin/messages/messages.component';
import { HomeComponent } from './home/home.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { LogComponent } from './log/log.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PayerComponent } from './payer/payer.component';
import { PhonesComponent } from './phones/phones.component';
import { ProductPcComponent } from './products/product-pc/product-pc.component';
import { ProductComponent } from './products/product/product.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', redirectTo: '' },
  { path: 'phones', component: PhonesComponent },
  { path: 'laptops', component: LaptopsComponent },
  { path: ':id/:title/phone', component: ProductComponent },
  { path: ':id/:title/laptop', component: ProductPcComponent },
  { path: 'log', component: LogComponent },
  { path: 'payer', component: PayerComponent },
  { path: 'about-us', component: AboutUsComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
      { path: 'acceuil', component: AcceuilComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'add-product', component: AddProductsComponent },
    ],
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSectionComponent } from './left-section/left-section.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product/product.component';
import { LogComponent } from './log/log.component';
import { LoginComponent } from './log/login/login.component';
import { RegisterComponent } from './log/register/register.component';
import { SearchComponent } from './header/search/search.component';
import { EnregistrerComponent } from './header/enregistre/enregistre.component';
import { PanierComponent } from './header/panier/panier.component';
import { Pub1Component } from './publications/pub1/pub1.component';
import { Pub2Component } from './publications/pub2/pub2.component';
import { Card1Component } from './cards/card1/card1.component';
import { Card2Component } from './cards/card2/card2.component';
import { Pub3Component } from './publications/pub3/pub3.component';
import { ProductPcComponent } from './products/product-pc/product-pc.component';
import { Card3Component } from './cards/card3/card3.component';
import { RequestComponent } from './request/request.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PhonesComponent } from './phones/phones.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { Card4Component } from './cards/card4/card4.component';
import { PayerComponent } from './payer/payer.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AdminComponent } from './admin/admin.component';
import { AcceuilComponent } from './admin/acceuil/acceuil.component';
import { MessagesComponent } from './admin/messages/messages.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderComponent,
    FooterComponent,
    LeftSectionComponent,
    HomeComponent,
    ProductComponent,
    LogComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    EnregistrerComponent,
    PanierComponent,
    Pub1Component,
    Pub2Component,
    Card1Component,
    Card2Component,
    Pub3Component,
    ProductPcComponent,
    Card3Component,
    RequestComponent,
    NotFoundComponent,
    PhonesComponent,
    LaptopsComponent,
    Card4Component,
    PayerComponent,
    AdminComponent,
    AcceuilComponent,
    MessagesComponent,
    AddProductsComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left',
    }),
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

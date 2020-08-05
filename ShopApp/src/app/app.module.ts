import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopModule } from './shop/shop.module';
import { HomeComponent } from './shop/home/home.component';
import { CatalogueComponent } from './shop/catalogue/catalogue.component';
import { AboutComponent } from './shop/about/about.component';
import { ContactComponent } from './shop/contact/contact.component';
import { CartDetailComponent } from './shop/cart-detail/cart-detail.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './shop/details/details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,    
    ShopModule, RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'catalogue', component: CatalogueComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'cart', component: CartDetailComponent },
      { path: 'details', component: DetailsComponent },
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { ShopComponent } from './shop.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from './details/details.component';


@NgModule({
    imports : [ModelModule,BrowserModule,FormsModule,RouterModule,NgbModule],
    declarations: [ShopComponent, NavbarComponent, HomeComponent, CatalogueComponent, AboutComponent, ContactComponent, FooterComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent, DetailsComponent],
    exports:[ShopComponent,HomeComponent,CatalogueComponent,AboutComponent,ContactComponent]
})

export class ShopModule{}
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RestService } from './rest.service';
import { CategoryRepository } from './category.repository';
import { ProductRepository } from './product.repository';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { Details } from './details.model';
import { AuthService } from './auth.service';

@NgModule({
    imports : [HttpClientModule],
    providers:[RestService,ProductRepository,CategoryRepository,Cart,Order,OrderRepository,Details,AuthService]


})

export class ModelModule{}
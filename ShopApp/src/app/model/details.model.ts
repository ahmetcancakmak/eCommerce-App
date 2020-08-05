import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Details {

    public items: DetailItem[] = [];

    addItem(product:Product){
        this.items=[];
        this.items.push(new DetailItem(product));
    }



}

export class DetailItem {
    constructor(public product: Product) { }
}
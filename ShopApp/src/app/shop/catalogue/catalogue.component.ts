import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { Product } from 'src/app/model/product.model';
import { CategoryRepository } from 'src/app/model/category.repository';
import { ProductRepository } from 'src/app/model/product.repository';
import { Cart } from 'src/app/model/cart.model';
import { Details } from 'src/app/model/details.model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  public selectedCategory: Category = null;
  public productsPerPage = 3;
  public selectedPage = 1;
  public selectedProducts: Product[] = [];
    
  selectedProduct: Product = null;

  constructor(private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository,
    private cart: Cart,private details:Details) { }

  ngOnInit() {
  }

  get products(): Product[] {
    let index = (this.selectedPage - 1) * this.productsPerPage;

    this.selectedProducts = this.productRepository
      .getProducts(this.selectedCategory);

    return this.selectedProducts.slice(index, index + this.productsPerPage);
  }


  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.productRepository.getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0).map((a, i) => i + 1);
  }

  changeCategory(newCategory?: Category) {
    this.selectedCategory = newCategory;
  }
  changePage(p: number) {
    this.selectedPage = p;
  }

  changePerSize(size: number) {
    this.productsPerPage = size;
    this.changePage(1);
  }

  addProductToCart(product: Product) {
    this.cart.addItem(product);
  }
  displayDetails(product:Product){
    this.details.addItem(product);    
  }

  

}

import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public cart:Cart) { }

  ngOnInit() {
  }

}

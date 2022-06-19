import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public productList: any;

  constructor(private api: ApiService, private cartService: CartService) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe({
      next: (res) => {
        this.productList = res;
        console.log(res);
      },
      error: (err) => {
        alert('error while fetching the records.');
        console.log(err);
      },
    });
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
}

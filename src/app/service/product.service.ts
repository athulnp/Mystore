import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Array<Product>;
  constructor() { }

  getProductList() {
    console.log('inside get product list');
    this.productList = [{
      name: "Acer",
      description: "Acer laptop"
    },
    {
      name: "Dell",
      description: "Dell laptop"
    },
    {
      name: "Asus",
      description: ""
    }
    ]
    console.log('inside get product list', this.productList);
    return this.productList;
  }
}

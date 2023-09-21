import { Component, OnInit } from '@angular/core';
import productData from '../../../assets/Data/Product.json';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  quantity: number;
  inStock:string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList:any[]=productData.ProductList;
  constructor() { }

  ngOnInit(): void {
  }
  

}

import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { Product } from 'src/app/ViewModels/product';
import { Store } from 'src/app/ViewModels/store';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  storeData:Store;
  ClientName:string="";

   ProductList:IProduct[]=[];
  constructor() {
    this.storeData = new Store("store 1",["cairo","assiut","sohage"],"https://fakeimg.pl/250x100/");
    this.ProductList = [{id:1,Name:"Aly",Quantity:4,Price:1200,Img:"https://fakeimg.pl/250x100",CateogryID:1}];
   }

  ngOnInit(): void {
  }

}

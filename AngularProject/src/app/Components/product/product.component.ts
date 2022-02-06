import { Component, OnInit } from '@angular/core';
import { ICateogry } from 'src/app/ViewModels/icateogry';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { Store } from 'src/app/ViewModels/store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  storeData:Store;
  ClientName:string="";

  ProductList:IProduct[]=[];
  OneProduct:IProduct;
  Catogaries:ICateogry[]=[];
  isPurchased = true;
  isDiv = false;
  selectedCatogary:number = 0;

  PurDate=Date.now();

  NationalID:string="29610152504553";
  CreidtCard:string="1234566543211234";
   constructor() {
   this.storeData = new Store("Assiut Store",["cairo","assiut","sohage"],"https://picsum.photos/250/100");
   
   this.OneProduct = {id:5,Name:"Taplet",Quantity:7,Price:100,Img:"https://picsum.photos/200/200",CateogryID:3};
   
   this.ClientName = "Tamara";
   
   this.ProductList = [{id:1,Name:"Mobile",Quantity:4,Price:1200,Img:"https://picsum.photos/250/100",CateogryID:1},
    {id:2,Name:"Laptop",Quantity:2,Price:1200,Img:"https://picsum.photos/250/100",CateogryID:1},
    {id:3,Name:"HardDisk",Quantity:2,Price:400,Img:"https://picsum.photos/250/100",CateogryID:2},
    {id:4,Name:"HeadPhones",Quantity:1,Price:300,Img:"https://picsum.photos/250/100",CateogryID:2},
    {id:5,Name:"Taplet",Quantity:7,Price:100,Img:"https://picsum.photos/250/100",CateogryID:3},
    {id:6,Name:"PC",Quantity:3,Price:1000,Img:"https://picsum.photos/250/100",CateogryID:3}];
    this.Catogaries = [{id:0,Name:"All Catogaries"},{id:1,Name:"Mobiles"},{id:2,Name:"Laptops"},{id:3,Name:"Other"}]
  }

  

  ngOnInit(): void {
  }
  showTable(){
    this.isPurchased = !this.isPurchased;
    this.isDiv = !this.isDiv;
  }
  DecQuantity(Quantity:number){
    Quantity--;
  }
}

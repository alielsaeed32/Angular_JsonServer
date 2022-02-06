import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class SProductService {
  ProductList:IProduct[];
  constructor() { 
    this.ProductList = [{id:1,Name:"Mobile",Quantity:4,Price:1200,Img:"https://picsum.photos/250/100",CateogryID:1},
    {id:2,Name:"Laptop",Quantity:2,Price:1200,Img:"https://picsum.photos/250/100",CateogryID:1},
    {id:3,Name:"HardDisk",Quantity:2,Price:400,Img:"https://picsum.photos/250/100",CateogryID:2},
    {id:4,Name:"HeadPhones",Quantity:1,Price:300,Img:"https://picsum.photos/250/100",CateogryID:2},
    {id:5,Name:"Taplet",Quantity:7,Price:100,Img:"https://picsum.photos/250/100",CateogryID:3},
    {id:6,Name:"PC",Quantity:3,Price:1000,Img:"https://picsum.photos/250/100",CateogryID:3}];

  }
  getAllProducts(): IProduct[]
  {
    return this.ProductList;
  }

  getProductsByCatID(catID: number):IProduct[]
  {
    if(catID==0)
     return this.ProductList;
   else
     return this.ProductList.filter(prd=>prd.CateogryID==catID);
  }

  getProductByID(prdID: number):IProduct
  {
    let found = this.ProductList.find(prd=>prd.id==prdID); 
    return (found)?found:{} as IProduct;
  }

}

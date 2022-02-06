import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  prd:IProduct; //= {} as IProduct; 
  addFrm !: FormGroup;
  //addFrm:IProduct = {} as IProduct; 
  constructor(private prdServiceFrmApi:ProductService 
            , private fb:FormBuilder
            , private router:Router) {
    // this.newPrd={
    //     id:1212,
    //     Name:"newpro000000",
    //     Quantity:51,
    //     Price:12221,
    //     Img:"https://picsum.photos/250/100",
    //     CateogryID:21
    //}
    this.prd={
      id:0,
      Name:"",
      Price:0,
      Quantity:0,
      Img:"https://picsum.photos/250/100",
      CateogryID:0
  }
   }

  ngOnInit(): void {
    //   this.addFrm = this.fb.group({
    //   id : ['',[Validators.required]],
    //   Name : ['',[Validators.required]],
    //   Price:['',[Validators.required]],
    //   Quantity:['',[Validators.required]],
    //   CateogryID:['',[Validators.required]]
    // });
    
  }
  addProduct()
  {
    this.prdServiceFrmApi.addProduct(this.prd).subscribe({
      next : res=> console.log(res)
    })
    this.router.navigateByUrl("/Order");
  }
  
}

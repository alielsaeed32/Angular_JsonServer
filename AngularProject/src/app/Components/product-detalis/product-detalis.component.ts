import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SProductService } from 'src/app/Services/sproduct.service';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-product-detalis',
  templateUrl: './product-detalis.component.html',
  styleUrls: ['./product-detalis.component.scss']
})
export class ProductDetalisComponent implements OnInit {

  sentProID:number=0;
  prod:IProduct|undefined=undefined;
  test:IProduct [] = [];
  lastIndex:number=0;
  constructor(private productService:SProductService 
             , private activatedRouter:ActivatedRoute
             , private router:Router
             , private location:Location) 
  { }

  ngOnInit(): void {
    // this.sentProID =Number(this.activatedRouter.snapshot.paramMap.get("pID"));
    // this.prod = this.productService.getProductByID(this.sentProID);

    this.activatedRouter.paramMap.subscribe((param)=>{
      this.sentProID =Number(param.get("pID"));
      this.prod = this.productService.getProductByID(this.sentProID);
    })
  }
  prevProduct()
  {
    this.router.navigate(['/Product',this.sentProID-1]);
  }
  nextProduct()
  {
    this.router.navigate(['/Product',this.sentProID+1]);
    this.test = this.productService.getAllProducts();
    this.lastIndex = this.test.length;
    
  }

  goBack()
  {
    //this.location.back();
    this.router.navigateByUrl("addProduct");
  }

}

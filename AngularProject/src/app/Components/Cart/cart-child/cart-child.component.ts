import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { SProductService } from 'src/app/Services/sproduct.service';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { IShoppingCartItems } from 'src/app/ViewModels/ishopping-cart-items';

@Component({
  selector: 'app-cart-child',
  templateUrl: './cart-child.component.html',
  styleUrls: ['./cart-child.component.scss']
})
export class CartChildComponent implements OnInit , OnChanges {
  
  ProductList:IProduct[]=[];

  ProductListForSelCat:IProduct[]=[];

  @Input() CatIDSelected:number=0;

  TotalPrice:number = 0;

  @Output() TotalPriceChanged:EventEmitter<number>;
  
  countItems:any=0;
  shoppingItems:IShoppingCartItems|undefined

  @Output() SendShoppingItems:EventEmitter<any>;
  constructor(private prodService:SProductService
             ,private router:Router
             ,private prdServiceFrmApi:ProductService) {



    this.TotalPriceChanged = new EventEmitter<number>();
    this.SendShoppingItems = new EventEmitter<any>();
    // this.ProductList = [{id:1,Name:"Mobile",Quantity:4,Price:1200,Img:"https://picsum.photos/250/100",CateogryID:1},
    // {id:2,Name:"Laptop",Quantity:2,Price:1200,Img:"https://picsum.photos/250/100",CateogryID:1},
    // {id:3,Name:"HardDisk",Quantity:2,Price:400,Img:"https://picsum.photos/250/100",CateogryID:2},
    // {id:4,Name:"HeadPhones",Quantity:1,Price:300,Img:"https://picsum.photos/250/100",CateogryID:2},
    // {id:5,Name:"Taplet",Quantity:7,Price:100,Img:"https://picsum.photos/250/100",CateogryID:3},
    // {id:6,Name:"PC",Quantity:3,Price:1000,Img:"https://picsum.photos/250/100",CateogryID:3}];

    //this.ProductListForSelCat = Array.from(this.ProductList);
   }
  ngOnChanges(changes: SimpleChanges): void {
    // if (this.CatIDSelected==0)
    //    this.ProductListForSelCat = Array.from(this.ProductList);
    // else
    //    this.ProductListForSelCat = this.ProductList.filter((p=>p.CateogryID == this.CatIDSelected));
    //this.ProductListForSelCat = this.prodService.getProductsByCatID(this.CatIDSelected);
    this.prdServiceFrmApi.getProductBycatID(this.CatIDSelected)
                                .subscribe({
                                  next:(p)=>{
                                    this.ProductListForSelCat=p
                                  },
                                  error : (err) => {
                                    console.log(err);
                                  }
                                });
  }

  ngOnInit(): void {
    //this.ProductList = this.prodService.getAllProducts();
    this.prdServiceFrmApi.getAllProducts().subscribe({
      next : (products)=>{
        this.ProductList = products;
        console.log("tamam");
        
        this.ProductListForSelCat = Array.from(this.ProductList);
      },
      error : (err) => {
        console.log(err);
      }
    });
  }
  calcTotalPrice(itemPrice:number,itemQuantity:any)
  {
    this.TotalPrice += (itemPrice * +itemQuantity);
    this.TotalPriceChanged.emit(this.TotalPrice);
  }

  // increaseCount(id:number,name:string,price:number,quantity:number)
  increaseCount(ele:any,item:IProduct)
  {

    this.ProductList.find((prd,index)=>{
      if(prd.id == item.id)
        prd.Quantity --;
    }  )

    ele=ele as ElementRef
    ele.value++
    this.shoppingItems={ProductID:item.id,ProductName:item.Name,
      UnitPrice:item.Price,
      SelectedQuantity:parseInt(ele.value)}
      console.log(this.shoppingItems.ProductName);
       let indexOfProduct=this.findProductIndex(item)
          if(ele.value<=this.ProductList[indexOfProduct].Quantity)
              {
               this.SendShoppingItems.emit(this.shoppingItems)
             } 
           else
           {
             ele.value--
             alert("You Order Exceeds Our Stock")
           }
     this.SendShoppingItems.emit(this.shoppingItems)
  }
  
  // increaseCount(id:number,name:string,price:number,quantity:number)
  // increaseCount(ele:any,item:IProduct)
  // {
  //   // debugger
  //   this.countItems++;
  //   this.shoppingItems.push({ProductID:id,ProductName:name,UnitPrice:price,SelectedQuantity:quantity});
  //   console.log(this.shoppingItems.length);
  //   this.SendShoppingItems.emit(this.shoppingItems)
  // }
  decreaseCount(element:any,item:IProduct)
  {
    this.ProductList.find((prd,index)=>{
      if(prd.id == item.id)
        prd.Quantity ++;
    }  )
    // let q = item.Quantity;
    // this.ProductList.find((prd,index)=>{
    //   if(prd.ID == item.ID)
    //     prd.Quantity ++;
    //   if(prd.Quantity==q)
    //     alert("fffffffffffffffffff")
    // }  )

    element=element as ElementRef
    if(  element.value>0)
      element.value--
      this.shoppingItems={ProductID:item.id,ProductName:item.Name,
        UnitPrice:item.Price,
        SelectedQuantity:parseInt(element.value)}
        this.SendShoppingItems.emit(this.shoppingItems)
  }
  // decreaseCount(n:any,item:IProduct)
  // {
  //   // n=n as ElementRef
  //   // n.value--;
  //   this.countItems--;
  // }

  findProductIndex(item:IProduct)
{
  let i=-1
  this.ProductList.find((prd,index)=>{
    if(prd.id== item.id)
      i=index
  }  )

  return i
}

goProductDetails(pid:any)
{
  this.router.navigate(['/Product',pid]);
}
}

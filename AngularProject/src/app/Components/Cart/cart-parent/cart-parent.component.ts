import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ICateogry } from 'src/app/ViewModels/icateogry';
import { IShoppingCartItems } from 'src/app/ViewModels/ishopping-cart-items';
import { CartChildComponent } from '../cart-child/cart-child.component';

@Component({
  selector: 'app-cart-parent',
  templateUrl: './cart-parent.component.html',
  styleUrls: ['./cart-parent.component.scss']
})
export class CartParentComponent implements OnInit,AfterViewInit ,OnChanges {

  CatList:ICateogry[]=[];

  selectedCatogaryID:number = 0;

  RecToatalPrice:number=0;

  //cartItem:IShoppingCartItems|undefined

  shoppingCartItems:IShoppingCartItems[]=[]

  @ViewChild('selectCategory') selectCategoryElement!:ElementRef
  @ViewChild(CartChildComponent) childCartComponent!:CartChildComponent

  constructor() {
    this.CatList = [{id:1,Name:"Mobiles"},{id:2,Name:"Laptops"},{id:3,Name:"Other"}]
   }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit() {
    console.log("ssssssssssssssssssssssssssssssssssssss");
    let e=this.selectCategoryElement.nativeElement as HTMLInputElement
    console.log(e)

    this.selectCategoryElement.nativeElement.style.backgroundColor="green"
    this.selectCategoryElement.nativeElement.value=2
  }

  ngOnInit(): void {
  }
  onTotalPriceChanged(totalPrice:number)
  {
    console.log("Ssssssssssss");
    this.RecToatalPrice = totalPrice;
    console.log(this.RecToatalPrice);
  }

  ReciveShoppingItems(cartItem:IShoppingCartItems)
  {
    let i=-1
    this.shoppingCartItems.find((prd,index)=>{
      if(prd.ProductID== cartItem.ProductID)
        i=index
    }  )
   i==-1?
    this.shoppingCartItems.push(cartItem)
    :
    this.shoppingCartItems[i].SelectedQuantity=cartItem.SelectedQuantity
      // this.shoppingCartItems=list
      console.log(this.shoppingCartItems)
  }

  confirm()
  {
  console.log("pb 9 Confirm")
  console.log(this.selectCategoryElement.nativeElement)
  console.log(this.childCartComponent.CatIDSelected)
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  pro!:Observable<IProduct[]>
  constructor(private httpService:HttpClient) { }

  getAllProducts() :Observable<IProduct[]>
  {
    return this.httpService.get<IProduct[]>(`${environment.ApiUrl}/products`);
  }

  getProductBycatID(catID:number) :Observable<IProduct[]>
  {
    if(catID==0)
    return this.httpService.get<IProduct[]>(`${environment.ApiUrl}/products`);
   else
   return this.httpService.get<IProduct[]>(`${environment.ApiUrl}/products?CateogryID=`+catID);
  }

  getProductByID(ID:number) :Observable<IProduct>
  {
    return this.httpService.get<IProduct>(`${environment.ApiUrl}/products?id=`+ID);
    //return this.httpService.get<IProduct>(environment.ApiUrl+"/"+"products?id="+ID);
  }

  addProduct(prod:IProduct) :Observable<any>
  {
    const httpOptions={
      headers : new HttpHeaders({
        'content-type':'application/JSON'
      })
    }
    return this.httpService.post(`${environment.ApiUrl}/Products`,JSON.stringify(prod),httpOptions);
  }

}

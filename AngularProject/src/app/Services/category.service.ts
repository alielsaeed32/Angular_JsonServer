import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICateogry } from '../ViewModels/icateogry';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpService:HttpClient) { }
  getAllCateogories() :Observable<ICateogry[]>
  {
    return this.httpService.get<ICateogry[]>(`${environment.ApiUrl}/categories`);
  }
}

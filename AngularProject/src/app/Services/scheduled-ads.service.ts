import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduledAdsService {

  adsList:string[];
  constructor() { 
    this.adsList=[
      "Ads 1",
      "Ads 2",
      "Ads 3",
      "Ads 4",
      "Ads5"
    ];
  }

  reciveScudAds()
  {
    let adsObj = new Observable <string>((observer)=>{
      let c = 0;
      let msgTimer = setInterval(()=>{
        if(this.adsList[c]=="")
        {
          observer.error("Empty String");
          
        }
        observer.next(this.adsList[c]);
        if(c < this.adsList.length-1)
          c++;
          else
            observer.complete();
      },4000);
      return {
      unsubscribe(){
        clearInterval(msgTimer);
        console.log("Unsubscribe");
      }
    };
    });
    return adsObj;
  }
}

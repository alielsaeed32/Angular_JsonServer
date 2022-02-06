import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScheduledAdsService } from 'src/app/Services/scheduled-ads.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit , OnDestroy {

  private unsubscribe!:Subscription;
  constructor(private shedService:ScheduledAdsService) { }


  ngOnInit(): void {
    const subsriber={
      next: (msg:string)=>console.log(msg),
      error :(err:string)=>console.log("Error :" + err),
      complete:() => console.log("Thanks")
    }
    this.shedService.reciveScudAds().subscribe(subsriber);
  }

  ngOnDestroy(): void {
    this.unsubscribe.unsubscribe();
  }

}

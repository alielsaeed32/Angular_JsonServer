import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eyptianID'
})
export class EyptianIDPipe implements PipeTransform {
  yy:string="";
  mm:string="";
  dd:string="";
  res:string="";
  d:Date=new Date();
  transform(card:string): Date {
    this.yy=card.slice(1,3);
    this.mm=card.slice(3,5);
    this.dd=card.slice(5,7);
    this.res = this.dd+"-"+this.mm+"-"+this.yy;
    this.d = new Date(parseInt(this.yy),parseInt(this.mm),parseInt(this.dd));
    // return this.res;
     return this.d;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creidtCard'
})
export class CreidtCardPipe implements PipeTransform {
  one:string="";
  two:string="";
  three:string="";
  four:string="";
  transform(EgyID:string): string {
    this.one=EgyID.slice(0,4);
    this.two=EgyID.slice(4,8);
    this.three=EgyID.slice(8,12);
    this.four=EgyID.slice(12,16);
    return this.one+"-"+this.two+"-"+this.three+"-"+this.four;
  }

}

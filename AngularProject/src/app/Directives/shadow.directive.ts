import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  constructor(private elem:ElementRef) {
     this.elem.nativeElement.style="text-shadow: ;";
    
   }

   @HostListener('mouseover') onMouseOver()
   {
     this.elem.nativeElement.style="text-shadow: 3px 4px 5px red"
   }

   @HostListener('mouseout') onMouseOut()
   {
  
    this.elem.nativeElement.style="text-shadow: ;"
   }

}

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardnumber]'
})
export class CardnumberDirective {
  cardnumber:string;
@HostListener('blur') onBlur(){
this.maskNumber();
}
  constructor(private elementRef:ElementRef) { 
    this.cardnumber = "";
  }
  maskNumber(){
    var cnum = this.elementRef.nativeElement.value as string;
    this.cardnumber = cnum.substring(0,4)+"-****-****-****";
    this.elementRef.nativeElement.value = this.cardnumber;
  }

}

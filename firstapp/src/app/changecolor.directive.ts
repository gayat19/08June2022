import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {
@HostListener('click') onClick(){
    this.colorNow("pink");
}
@HostListener('dblclick') onDblClick(){
  this.colorNow("lime");
}
  constructor(private elementRef:ElementRef) { 
    
  }
  colorNow(color:string){
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}

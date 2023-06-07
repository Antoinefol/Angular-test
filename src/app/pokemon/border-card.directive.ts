import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private initialHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setHeight(this.initialHeight);
    this.setBorder(this.initialColor);
   }

   @Input('appBorderCard') borderColor: string;
 

   @HostListener('mouseenter') onMouseEnter() {
  
    this.setBorder(this.borderColor || this.defaultColor);
   }

   @HostListener('mouseleave') onMouseLeave() {
   
    this.setBorder(this.initialColor);
   }

  setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}

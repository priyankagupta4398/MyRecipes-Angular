import { Directive } from '@angular/core';
import{ElementRef,HostListener} from '@angular/core'
import { from } from 'rxjs';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('orange','pointer');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null,null);
  }

  private highlight(color: string,cousorType:string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.cursor = cousorType;
  }

}

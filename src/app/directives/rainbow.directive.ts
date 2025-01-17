import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  @HostBinding('style.color') fontColor = 'black';
  @HostBinding('style.borderColor') borderColor = 'black';
  @HostBinding('style.border-style') borderStyle = 'solid';
  @HostBinding('style.border-width') borderWidth = '5px';

  @HostListener('keydown') onKeyDown() {
    this.borderColor = '#'  + ((2 ** 24) * Math.random() | 0).toString(16);
    this.fontColor = '#'  + ((2 ** 24) * Math.random() | 0).toString(16);
  }
  constructor() { }

}

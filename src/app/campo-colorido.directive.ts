import { Directive, /*ElementRef, Renderer2*/ HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor') corFundo: string;
  @Input('appCampoColorido') cor = 'gray';

  /*
  constructor(
    private elementRef: ElementRef,
    private renderer : Renderer2
  ) { }
  */

  @HostListener('focus') colorir(){
    // console.log(this.elementRef.nativeElement);
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');

    // this.corFundo = 'yellow';
    this.corFundo = this.cor;
  }

  @HostListener('blur') descolorir(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.corFundo = 'transparent';
  }
}

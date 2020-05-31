import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen:boolean = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  // @HostListener('mouseenter') mouseOver(eventData: Event) { // eventData: Event is not necessary in this case. 
  //                                                           //In case you want to listen to click event or so, you can use this
  //   this.isOpen = !this.isOpen;
  // }

  // @HostListener('mouseleave') mouseLeave() { 
  //   this.isOpen = !this.isOpen;
  // }


  constructor(private elRef: ElementRef) {}

}

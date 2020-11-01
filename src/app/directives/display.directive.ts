import { Directive, HostListener, HostBinding, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDisplay]'
})
export class DisplayDirective implements OnInit {
	@HostBinding('class.close') closed;

  constructor(private renderer: Renderer2, private eRef: ElementRef) { }

  ngOnInit(): void {

  }

  @HostListener('click') onClick(eventData: Event) {
  	this.closed = 'open';
  }
}

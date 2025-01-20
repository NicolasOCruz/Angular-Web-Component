import { Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-singe',
  standalone: true,
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.scss',
})
export class SingleComponent {

  @Input("item") item: any = {};
  @Input("height") height: string = '50%';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
      this.elementRef.nativeElement.open = () => this.open();
  }

  open() {
    this.renderer.addClass(this.elementRef.nativeElement, 'visible');
    this.setHeight();
  }

  close() {
    this.renderer.removeClass(this.elementRef.nativeElement, 'visible');
  }

  private setHeight() {
    const bottomSheet = this.elementRef.nativeElement.querySelector('.bottom-sheet');
    if (bottomSheet) {
      this.renderer.setStyle(bottomSheet, 'height', this.height);
    }
  }
}

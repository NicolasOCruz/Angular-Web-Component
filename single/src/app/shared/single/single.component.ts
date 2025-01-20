import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.scss'
})
export class SingleComponent implements OnInit {

  @Input("item") item: any = {};
  @Input("height") height: string = '50%';

  private backdrop!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Criar o backdrop (fundo opaco)
  }

  open() {
    this.renderer.addClass(this.el.nativeElement, 'open');
    this.renderer.addClass(this.backdrop, 'visible');
  }

  close() {
    this.renderer.removeClass(this.el.nativeElement, 'open');
    this.renderer.removeClass(this.backdrop, 'visible');
  }
}

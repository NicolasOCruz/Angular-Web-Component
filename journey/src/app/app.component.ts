import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {

  title = 'journey';

  elements: any[] = []

  item = {
    "type": '123'
  }

  @ViewChild("web", {static: true}) web!: ElementRef

  ngOnInit(): void {
    const el = [
      {
        type: "RG",
        formats: "pdf, jpg"
      },
      {
        type: "CPF",
        formats: "pdf, jpg"
      },
      {
        type: "Certidão",
        formats: "pdf, jpg"
      }
    ]
    this.elements = el;
  }
  
  openBottom() {
    const web = this.web.nativeElement;
    web.open();
  }

  touch(event: any) {
    console.log(event)
  }
}

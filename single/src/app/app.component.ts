import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SingleComponent } from "./shared/single/single.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SingleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'single';

  @ViewChild(SingleComponent) single !: SingleComponent;
  
  open() {
    this.single.open();
  }
}

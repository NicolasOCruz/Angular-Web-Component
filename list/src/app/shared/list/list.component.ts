import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SingeComponent } from "../singe/singe.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, SingeComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListComponent {

  @Input("elements") elements: any[] = [];
  @Output("clicked") clicked = new EventEmitter<any>();

  @ViewChild('bottomSheet') bottomSheet!: SingeComponent;

  openBottomSheet() {
    this.clicked.emit({"message": "Clicked sucess!"})
    this.bottomSheet.open();
  }
}

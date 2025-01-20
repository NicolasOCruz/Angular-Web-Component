import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SingleComponent } from '../single/single.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, SingleComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListComponent {

  @Input("elements") elements: any[] = [];
  @Output("clicked") clicked = new EventEmitter<any>();

  @ViewChild('bottomSheet') bottomSheet!: SingleComponent;

  openBottomSheet() {
    this.clicked.emit({"message": "Clicked sucess!"})
    this.bottomSheet.open();
  }
}

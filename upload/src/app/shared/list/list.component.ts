import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {

  elements: any[] = [];

  ngOnInit(): void {
    const el = [
      {
        type: "RG",
        formats: "pdf, jpg"
      },
      {
        type: "CPF",
        formats: "pdf, jpg"
      }
    ]
    this.elements = el;
  }

}

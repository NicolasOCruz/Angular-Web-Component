import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingeComponent } from './singe.component';

describe('SingeComponent', () => {
  let component: SingeComponent;
  let fixture: ComponentFixture<SingeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

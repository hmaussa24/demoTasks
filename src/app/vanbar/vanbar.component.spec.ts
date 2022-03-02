import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbarComponent } from './vanbar.component';

describe('VanbarComponent', () => {
  let component: VanbarComponent;
  let fixture: ComponentFixture<VanbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

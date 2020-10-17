import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LMapComponent } from './lmap.component';

describe('LMapComponent', () => {
  let component: LMapComponent;
  let fixture: ComponentFixture<LMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

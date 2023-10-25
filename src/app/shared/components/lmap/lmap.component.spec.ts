import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LMapComponent } from './lmap.component';

describe('LMapComponent', () => {
  let component: LMapComponent;
  let fixture: ComponentFixture<LMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [LMapComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LMapComponent);
    component = fixture.componentInstance;
    component.lat = 45;
    component.long = 5;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

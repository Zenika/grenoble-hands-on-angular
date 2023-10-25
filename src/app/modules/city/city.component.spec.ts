import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityComponent } from './city.component';
import {LMapComponent} from "../../shared/components/lmap/lmap.component";
import {RouterTestingModule} from "@angular/router/testing";

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CityComponent, LMapComponent, RouterTestingModule],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

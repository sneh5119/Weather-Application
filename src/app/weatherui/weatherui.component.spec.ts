import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatheruiComponent } from './weatherui.component';

describe('WeatheruiComponent', () => {
  let component: WeatheruiComponent;
  let fixture: ComponentFixture<WeatheruiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatheruiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatheruiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

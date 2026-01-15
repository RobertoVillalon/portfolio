import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkmodeSwitch } from './darkmode-switch';

describe('DarkmodeSwitch', () => {
  let component: DarkmodeSwitch;
  let fixture: ComponentFixture<DarkmodeSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkmodeSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkmodeSwitch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

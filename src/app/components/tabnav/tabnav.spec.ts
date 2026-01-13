import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabnav } from './tabnav';

describe('Tabnav', () => {
  let component: Tabnav;
  let fixture: ComponentFixture<Tabnav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tabnav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tabnav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicInformation } from './academic-information';

describe('AcademicInformation', () => {
  let component: AcademicInformation;
  let fixture: ComponentFixture<AcademicInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicInformation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projectbody } from './projectbody';

describe('Projectbody', () => {
  let component: Projectbody;
  let fixture: ComponentFixture<Projectbody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projectbody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projectbody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSites } from './create-sites';

describe('CreateSites', () => {
  let component: CreateSites;
  let fixture: ComponentFixture<CreateSites>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSites]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSites);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

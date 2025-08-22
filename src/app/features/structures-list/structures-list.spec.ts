import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuresList } from './structures-list';

describe('StructuresList', () => {
  let component: StructuresList;
  let fixture: ComponentFixture<StructuresList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuresList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuresList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

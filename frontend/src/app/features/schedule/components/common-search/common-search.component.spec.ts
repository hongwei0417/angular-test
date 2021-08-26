import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFilterComponent } from './common-search.component';

describe('GlobalFilterComponent', () => {
  let component: GlobalFilterComponent;
  let fixture: ComponentFixture<GlobalFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlobalFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

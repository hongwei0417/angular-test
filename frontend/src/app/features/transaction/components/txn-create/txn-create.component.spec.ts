import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { MockModule } from 'ng-mocks';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnCreateComponent } from './txn-create.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TxnCreateComponent', () => {
  let component: TxnCreateComponent;
  let fixture: ComponentFixture<TxnCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MockModule(TableModule),
        SelectButtonModule,
        CalendarModule,
        AutoCompleteModule,
        NoopAnimationsModule,
      ],
      declarations: [TxnCreateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxnCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

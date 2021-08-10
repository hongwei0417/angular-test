import { By } from '@angular/platform-browser';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { MockModule } from 'ng-mocks';

import {
  autoschtranms,
  tableColumns,
  TxnListTableComponent,
} from './txn-list-table.component';

describe('TxnListTableComponent', () => {
  let component: TxnListTableComponent;
  let fixture: ComponentFixture<TxnListTableComponent>;
  let listTableElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, ReactiveFormsModule, TableModule],
      declarations: [TxnListTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxnListTableComponent);
    component = fixture.componentInstance;
    listTableElement = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should render correct table header', () => {
    const element = listTableElement.querySelector(
      'thead tr'
    ) as HTMLTableRowElement;
    tableColumns.forEach((item, i) => {
      const cell = element.cells[i];
      expect(cell.textContent?.trim()).toBe(item.header);
    });
  });

  it('should render correct table data', () => {
    const element = listTableElement.querySelectorAll(
      '.p-datatable-scrollable-body tr'
    );
    expect(element.length).toBe(autoschtranms.length);
    const head = tableColumns.splice(-(tableColumns.length - 5));
    autoschtranms.forEach((rowData: any, i) => {
      const row = element[i] as HTMLTableRowElement;
      head.forEach((headData, j) => {
        const cell = row.cells[j + 5] as HTMLTableCellElement;
        expect(cell.textContent?.trim()).toBe(rowData[headData.field] || '');
      });
    });
  });
});

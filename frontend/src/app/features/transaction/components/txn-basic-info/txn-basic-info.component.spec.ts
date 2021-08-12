import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnCreateComponent } from './txn-basic-info.component';

describe('TxnCreateComponent', () => {
  let component: TxnCreateComponent;
  let fixture: ComponentFixture<TxnCreateComponent>;
  let hostElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        TableModule,
        SelectButtonModule,
        CalendarModule,
        AutoCompleteModule,
      ],
      declarations: [TxnCreateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxnCreateComponent);
    component = fixture.componentInstance;
    hostElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should switch accordionStates when click', () => {
    const element = hostElement.querySelector(
      '.accordionHeader'
    ) as HTMLElement;
    element.click();
    fixture.detectChanges();
    expect(component.accordionStates).toBe(true);
  });

  it('should show suggestions when input AP booking', () => {
    const APBookingInput = hostElement.querySelector(
      'p-autocomplete[formcontrolname="APBooking"]'
    ) as HTMLInputElement;
    inputChange(APBookingInput, 'completeMethod');
    expect(component.APBookingIds.length).toBeGreaterThan(0);
  });

  it('should show suggestions when input time zone id', () => {
    const timeZoneInput = hostElement.querySelector(
      'p-autocomplete[formcontrolname="TimeZone"]'
    ) as HTMLInputElement;
    inputChange(timeZoneInput, 'completeMethod');
    expect(component.timeZoneIds.length).toBeGreaterThan(0);
  });

  function inputChange(
    element: HTMLInputElement,
    eventName: string = 'input'
  ): void {
    element.value = 'type something...';
    element.dispatchEvent(new Event(eventName));
    fixture.detectChanges();
  }
});

import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_ASYNC_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { HotTableRegisterer } from '@handsontable/angular';
import * as Handsontable from 'handsontable';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-handsontable',
  templateUrl: './handsontable.component.html',
  styleUrls: ['./handsontable.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HandsontableComponent),
      multi: true,
    },
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => HandsontableComponent),
      multi: true,
    },
    HotTableRegisterer,
  ],
})
export class HandsontableComponent implements OnInit, OnDestroy, ControlValueAccessor {
  subscription = new Subscription();

  private hotRegisterer = new HotTableRegisterer();
  private _value: any;

  @Input() hotId = 'default';
  @Input() triggerElName = 'nav-item';
  @Input() settings!: Omit<Handsontable.default.GridSettings, 'afterInit' | 'afterChange'>;
  @Input() hooks: HandsontableHooks = {};

  defaultSetting: Handsontable.default.GridSettings = {
    licenseKey: 'non-commercial-and-evaluation',
    // width: '90vw',
    stretchH: 'all',
    allowInsertColumn: false,
    allowRemoveColumn: false,
    autoRowSize: true,
    autoColumnSize: true,
    // manualColumnResize: true,
    // manualRowResize: true,
    // manualRowMove: true,
    // manualColumnMove: true,
    rowHeaders: true,
    minSpareRows: 1,
    invalidCellClassName: 'highlight--error',
    contextMenu: ['row_above', 'row_below', 'remove_row'],
    afterInit: (() => {
      const table = this.hotRegisterer.getInstance(this.hotId);

      if (this.hooks.afterInit) {
        this.hooks.afterInit(table);
      }
    }).bind(this),
    beforeChange: ((changes:any, source:any) => {
      const table = this.hotRegisterer.getInstance(this.hotId);
      const data = table.getSourceData();

      if (this.hooks.beforeChange) {
        this.hooks.beforeChange(changes, source, table);
      }
    }).bind(this),
    afterValidate: ((isValid:any, value:any, row:any, prop:any, source:any) => {
      const table = this.hotRegisterer.getInstance(this.hotId);
      const data = table.getSourceData();

      if (this.hooks.afterValidate) {
        return this.hooks.afterValidate(isValid, value, row, prop, source, table);
      }
    }).bind(this),
    afterChange: ((changes:any, source:any) => {
      const table = this.hotRegisterer.getInstance(this.hotId);
      const data = table.getSourceData();

      if (this.hooks.afterChange) {
        this.hooks.afterChange(changes, source, table);
      }

      const filterdData = data.filter((item) => !Object.values(item).every((value) => value === null || value === ''));
      this.value = filterdData;
    }).bind(this),
    afterRemoveRow: (() => {
      const table = this.hotRegisterer.getInstance(this.hotId);
      const data = table.getSourceData();
      const filterdData = data.filter((item) => !Object.values(item).every((value) => value === null || value === ''));
      this.value = filterdData;
    }).bind(this),
  };

  dataset:any;
  disabled = false;

  onChange: any = (value:any) => {};
  onTouched: any = () => {};

  onValidatorChange: any = () => {};

  get value(): any {
    return this._value;
  }
  set value(val) {
    if (val !== this._value) {
      this._value = val;
      setTimeout(() => {
        this.onChange(this._value);
        this.onTouched();
      });
    }
  }


  constructor() { }

  ngOnInit(): void {
    this.settings = Object.assign(this.defaultSetting, this.settings);

    // https://github.com/handsontable/handsontable/issues/5322
    this.subscription.add(
      fromEvent(document.getElementsByClassName(this.triggerElName), 'click').subscribe((e) => {
        this.hotRegisterer.getInstance(this.hotId).render();
        this.setDisabledState(this.disabled);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  registerOnChange(fn:any) {
    this.onChange = fn;
  }

  registerOnTouched(fn:any) {
    this.onTouched = fn;
  }

  writeValue(value: any[]) {
    if (value) {
      value = value.map((item) => {
        let result:any = {};
        for (let k in this.settings.dataSchema) {
          result[k] = item[k];
        }
        return result;
      });
      this.dataset = value;
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;

    const table = this.hotRegisterer.getInstance(this.hotId);
    if (!table) {
      return;
    }
    if (!this.disabled) {
      table.updateSettings({
        readOnly: false,
        contextMenu: true,
        disableVisualSelection: false,
        manualColumnResize: true,
        manualRowResize: true,
        comments: true,
      });
    } else {
      table.updateSettings({
        readOnly: true,
        contextMenu: false,
        disableVisualSelection: true,
        manualColumnResize: false,
        manualRowResize: false,
        comments: false,
      });
    }
  }

  validate(): Promise<ValidationErrors | null> {
    const table = this.hotRegisterer.getInstance(this.hotId);

    return new Promise((resolve) => {
      if (table) {
        table.validateCells((isValid) => {
          resolve(isValid ? null : { table: true });
        });
      } else {
        resolve(null);
      }
    });
  }

  // registerOnValidatorChange?(fn: () => void): void {
  //   this.onValidatorChange = fn;
  // }

}



export interface HandsontableHooks {
  afterInit?: (table: Handsontable.default) => void;
  afterValidate?: (isValid:any, value:any, row:any, prop:any, source:any, table: Handsontable.default) => void;
  beforeChange?: (changes:any, source:any, table: Handsontable.default) => void;
  afterChange?: (changes:any, source:any, table: Handsontable.default) => void;
}

export function rowRequireValidator(this: any, value:any, callback:any) {
  const rowValue = (this.instance ? this.instance : (this as Handsontable.default)).getDataAtRow(this.row);
  if ((!value || 0 === value.length) && rowValue && Array.isArray(rowValue) && rowValue.filter((x) => !!x).length > 0) {
    callback(false);
  } else {
    callback(true);
  }
}
export function isRowRequire(this: any, value:any, row?:any) {
  const rowValue = (this.instance ? this.instance : (this as Handsontable.default)).getDataAtRow(
    row !== undefined ? row : this.row
  );
  if ((!value || 0 === value.length) && rowValue && Array.isArray(rowValue) && rowValue.filter((x) => !!x).length > 0) {
    return false;
  } else {
    return true;
  }
}

export function isColSame(this: any, value:any, col?:any) {
  const colValue = (this.instance ? this.instance : (this as Handsontable.default)).getDataAtCol(
    col !== undefined ? col : this.col
  );
  if (value && colValue && Array.isArray(colValue) && Array.from(new Set(colValue.filter((val) => val))).length > 1) {
    return false;
  } else {
    return true;
  }
}

export function isColUnique(this: any, value:any, col?:any) {
  const colValue = (this.instance ? this.instance : (this as Handsontable.default)).getDataAtCol(
    col !== undefined ? col : this.col
  );
  if (
    value &&
    colValue &&
    Array.isArray(colValue) &&
    colValue.filter((val) => val).filter((val) => val === value).length > 1
  ) {
    return false;
  } else {
    return true;
  }
}

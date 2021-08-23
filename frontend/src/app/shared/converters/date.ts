import { box, Boxed, unbox } from 'ngrx-forms';

export const PrimeNgConverts = {
  getDateRange: {
    convertViewToStateValue: (v: Date[]) => {
      console.log(v);
      return box(v.map((i) => i.toISOString()));
    },
    convertStateToViewValue: (v: Boxed<string[]>) => {
      console.log(v);

      const value = unbox(v.value);
      return value.map((i) => new Date(i));
    },
  },
};

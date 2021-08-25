import { box, Boxed, unbox } from 'ngrx-forms';

export const PrimeNgConverts = {
  getDateRange: {
    convertViewToStateValue: (v: Date[] | null[]) => {
      return box(v.map((i) => i?.toISOString() ?? ''));
    },
    convertStateToViewValue: (v: Boxed<string[] | null>) => {
      const value = unbox(v.value);
      return value?.[0] && value?.[1]
        ? value.map((i: any) => (i ? new Date(i) : i))
        : null;
    },
  },
};

import { createAction, props, union } from '@ngrx/store';

export const login = createAction('[LoginPage] Login');

const all = union({ login });
export type ActionsUnion = typeof all;

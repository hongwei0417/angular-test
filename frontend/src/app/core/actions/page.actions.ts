import { createAction } from '@ngrx/store';

export const layoutClick = createAction('[Page] Layout Click');
export const menuButtonClick = createAction('[Page] Menu Button Click');
export const topbarMenuButtonClick = createAction('[Page] Topbar Menu Button Click');
export const topbarItemClick = createAction('[Page] Topbar Item Button Click');
export const hideOverlayMenu = createAction('[Page] Hide Overlay Menu');

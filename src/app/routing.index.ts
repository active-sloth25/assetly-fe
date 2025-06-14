import { Routes } from '@angular/router';
import { HOME_PAGE_UI_ROUTES } from './shared/constants/ui-routes';

export const ROUTES_INDEX: Routes = [
  {
    path: HOME_PAGE_UI_ROUTES.MAIN,
    loadChildren: () =>
      import('./pages/home-page/home-page.routing').then(
        (m) => m.HOME_PAGE_ROUTES
      ),
  },

  {
    path: '**',
    redirectTo: HOME_PAGE_UI_ROUTES.MAIN,
  },
];

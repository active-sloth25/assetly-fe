import { Routes } from '@angular/router';
import { HOME_PAGE_UI_ROUTES } from '../../shared/constants/ui-routes';

export const HOME_PAGE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/main-page/main-page.component').then(
        (m) => m.MainPageComponent
      ),
    loadChildren: () => HOME_PAGE_CHILD_ROUTES,
  },
];

// ----------------- CHILD ROUTES ---------------------
export const HOME_PAGE_CHILD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/main-page/main-page.component').then(
        (m) => m.MainPageComponent
      ),
  },
  {
    path: '**',
    redirectTo: HOME_PAGE_UI_ROUTES.MAIN,
  },
];

import { Routes } from '@angular/router';
import {
  AUTHENTICATION_UI_ROUTES,
  HOME_PAGE_UI_ROUTES,
  MAIN_APP_UI_ROUTES,
  NOT_FOUND_UI_ROUTES,
} from './shared/constants/ui-routes';
// import { authGuardGuard } from './shared/guards/auth-guard.guard';

export const routes: Routes = [
  {
    path: AUTHENTICATION_UI_ROUTES.MAIN,
    loadChildren: () =>
      import('./pages/authentication/authentication.routing').then(
        (m) => m.AUTHENTICATION_ROUTES
      ),
  },
  {
    path: MAIN_APP_UI_ROUTES.MAIN,
    loadComponent: () =>
      import('./layouts/full-page/full-page.component').then(
        (m) => m.FullPageComponent
      ),
    loadChildren: () => import('./routing.index').then((m) => m.ROUTES_INDEX),
    // canActivate: [authGuardGuard],
  },
  //   {
  //     path: DRIVER_SIDE_UI_ROUTES.MOBILE_ROUTE,
  //     loadComponent: () =>
  //       import('./layouts/mobile-page/mobile-page/mobile-page.component').then(
  //         (m) => m.MobilePageComponent
  //       ),
  //     loadChildren: () =>
  //       import('./pages/driver-side/driver-side.routing').then(
  //         (m) => m.DRIVER_SIDE_ROUTES
  //       ),
  //   },
  //   {
  //     path: DRIVER_SIDE_UI_ROUTES.MAIN,
  //     loadChildren: () =>
  //       import('./pages/admin-drivers/admin-drivers.routing').then(
  //         (m) => m.ADMIN_DRIVER_ROUTES
  //       ),
  //   },
  //   {
  //     path: NOT_FOUND_UI_ROUTES.MAIN,
  //     loadChildren: () =>
  //       import('./pages/not-found/not-found.routing').then(
  //         (m) => m.NOT_FOUND_ROUTES
  //       ),
  //   },
  {
    path: '**',
    redirectTo: AUTHENTICATION_UI_ROUTES.MAIN,
  },
];

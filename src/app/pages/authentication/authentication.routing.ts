import { Routes } from '@angular/router';
import { AUTHENTICATION_UI_ROUTES } from '../../shared/constants/ui-routes';
import { checkEmailGuard } from './guards/check-email.guard';

export const AUTHENTICATION_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/main-page/main-page.component').then(
        (m) => m.MainPageComponent
      ),
    loadChildren: () => AUTH_CHILD_ROUTES,
  },
];

// ----------------- CHILD ROUTES ---------------------
export const AUTH_CHILD_ROUTES: Routes = [
  {
    path: AUTHENTICATION_UI_ROUTES.SIGN_IN,
    loadComponent: () =>
      import('./components/sign-in/sign-in.component').then(
        (m) => m.SignInComponent
      ),
  },
  {
    path: AUTHENTICATION_UI_ROUTES.SIGN_UP,
    loadComponent: () =>
      import('./components/sign-up/sign-up.component').then(
        (m) => m.SignUpComponent
      ),
  },
  {
    path: AUTHENTICATION_UI_ROUTES.VERIFY_OTP,
    loadComponent: () =>
      import('./components/verify-otp/verify-otp.component').then(
        (m) => m.VerifyOtpComponent
      ),
    canActivate: [checkEmailGuard],
  },
  {
    path: '**',
    redirectTo: AUTHENTICATION_UI_ROUTES.SIGN_IN,
  },
];

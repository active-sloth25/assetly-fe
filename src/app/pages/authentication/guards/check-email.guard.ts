import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AUTHENTICATION_UI_ROUTES } from '../../../shared/constants/ui-routes';
import { AbstractControl, Validators } from '@angular/forms';

export const checkEmailGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const email = route.queryParamMap.get('email');
  if (email) {
    const isValidEmail =
      Validators.email({ value: email } as AbstractControl) === null;
    if (isValidEmail) return true;
  }
  router.navigate([`/${AUTHENTICATION_UI_ROUTES.MAIN}`]);
  return false;
};

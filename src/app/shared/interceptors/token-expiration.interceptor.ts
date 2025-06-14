import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { AUTHENTICATION_UI_ROUTES } from '../constants/ui-routes';
import { environment } from '../../../environments/environment';
import { DRIVER_API_ROUTES, VEHICLE_API_ROUTES } from '../constants/api-routes';

export const tokenExpirationInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    tap({
      error: (err) => {
        const excludeUrls = [
          `${environment.BACKEND_URL}/${DRIVER_API_ROUTES.ADD_DRIVER}`,
          `${environment.BACKEND_URL}/${VEHICLE_API_ROUTES.ADD_VEHICLE}`,
        ];
        const checkUrl = excludeUrls.includes(req.url);
        if (err.status === 401 && !checkUrl) {
          // deleteAccessToken();
          router.navigate([AUTHENTICATION_UI_ROUTES.MAIN]);
        }
      },
    })
  );
};

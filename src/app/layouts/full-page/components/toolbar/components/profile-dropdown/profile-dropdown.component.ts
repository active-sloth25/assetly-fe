import { Component, inject } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AUTHENTICATION_UI_ROUTES } from '../../../../../../shared/constants/ui-routes';
import {
  deleteAccessToken,
  deleteAuthUser,
} from '../../../../../../shared/utils/app.utils';

@Component({
  selector: 'app-profile-dropdown',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './profile-dropdown.component.html',
})
export class ProfileDropdownComponent {
  private router = inject(Router);

  logoutUser() {
    deleteAccessToken();
    deleteAuthUser();
    this.router.navigate([`/${AUTHENTICATION_UI_ROUTES.MAIN}`]);
  }
}

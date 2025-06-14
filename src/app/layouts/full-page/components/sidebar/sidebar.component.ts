import { Component, computed, inject } from '@angular/core';
import { NgClass } from '@angular/common';

import { SidebarTogglerService } from '../../../../shared/services/sidebar-toggler.service';

import { NavItemComponent } from './components/nav-item/nav-item.component';
import { BrandingComponent } from './components/branding/branding.component';
import {
  ADMINS_UI_ROUTES,
  CONFIGURATIONS_UI_ROUTES,
  DASHBOARD_UI_ROUTES,
  // DRIVER_SIDE_UI_ROUTES,
  MAIN_APP_UI_ROUTES,
} from '../../../../shared/constants/ui-routes';

@Component({
  selector: 'app-sidebar',
  imports: [NavItemComponent, BrandingComponent, NgClass],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  private sidebarService = inject(SidebarTogglerService);
  showSidebar = computed(() => this.sidebarService.sidebarToggler());

  navList = [
    {
      heading: 'Home',
      icon: 'fa-solid fa-house',
      routeUrl: `/${MAIN_APP_UI_ROUTES.MAIN}/${ADMINS_UI_ROUTES.MAIN}`,
      pages: [],
    },
    {
      heading: 'My Files',
      icon: 'fa-solid fa-folder',
      routeUrl: `/${MAIN_APP_UI_ROUTES.MAIN}/${CONFIGURATIONS_UI_ROUTES.MAIN}`,
      pages: [],
    },
    {
      heading: 'Shared With Me',
      icon: 'fa-solid fa-users',
      // routeUrl: `/${MAIN_APP_UI_ROUTES.MAIN}/${DRIVER_SIDE_UI_ROUTES.MAIN_DRIVERS}`,
      pages: [],
    },
  ];
}

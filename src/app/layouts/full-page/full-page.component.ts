import { Component, effect, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidebarTogglerService } from '../../shared/services/sidebar-toggler.service';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
    selector: 'app-full-page',
    imports: [ToolbarComponent, SidebarComponent, RouterModule],
    templateUrl: './full-page.component.html'
})
export class FullPageComponent {
  private sidebarTogglerService = inject(SidebarTogglerService);
  showSidebar!: boolean;
  constructor() {
    effect(() => {
      this.showSidebar = this.sidebarTogglerService.sidebarToggler();
    });
  }
}

import { Component, inject, input } from '@angular/core';
import { SidebarTogglerService } from '../../../../shared/services/sidebar-toggler.service';
import { ButtonComponent } from '../../../../ui-components/components/button/button.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileDropdownComponent } from './components/profile-dropdown/profile-dropdown.component';

@Component({
  selector: 'app-toolbar',
  imports: [ButtonComponent, NgbDropdownModule, ProfileDropdownComponent],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  classList = input<string>('');

  private sidebarTogglerService = inject(SidebarTogglerService);
  toggleSidebar() {
    this.sidebarTogglerService.updateSidebarToggler();
  }

  userSettings() {
    this.sidebarTogglerService.updateSidebarToggler();
  }
}

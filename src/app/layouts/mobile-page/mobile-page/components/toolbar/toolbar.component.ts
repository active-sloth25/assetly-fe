import { Component } from '@angular/core';
import { BrandingComponent } from '../../../../full-page/components/sidebar/components/branding/branding.component';

@Component({
  selector: 'app-mobile-toolbar',
  imports: [BrandingComponent],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {}

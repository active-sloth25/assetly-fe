import { Component, input } from '@angular/core';

@Component({
  selector: 'app-branding',
  imports: [],
  templateUrl: './branding.component.html',
})
export class BrandingComponent {
  expanded = input<boolean>();
  classList = input.required<string>();
  containerClassList = input<string>();
  isMobileView = input<boolean>(false);
}

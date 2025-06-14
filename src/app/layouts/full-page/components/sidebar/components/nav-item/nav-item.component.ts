import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  imports: [RouterModule],
  templateUrl: './nav-item.component.html',
})
export class NavItemComponent {
  navItem = input.required<any>();
}

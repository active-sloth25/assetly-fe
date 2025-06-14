import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@Component({
  selector: 'app-mobile-page',
  imports: [RouterModule, ToolbarComponent],
  templateUrl: './mobile-page.component.html',
})
export class MobilePageComponent {}

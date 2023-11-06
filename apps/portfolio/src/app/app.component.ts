import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}

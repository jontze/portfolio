import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from '@jontze/feature/landing';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [LandingComponent, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}

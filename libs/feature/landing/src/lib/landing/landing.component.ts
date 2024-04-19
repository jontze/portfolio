import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fadeIn } from '@jontze/ui/animations';
import { FooterComponent } from '@jontze/ui/footer';
import { Icon, IconComponent } from '@jontze/ui/icon';
import { ParticleTextComponent } from '@jontze/ui/particle-text';
import { ProjectListComponent } from '@jontze/feature/projects';

@Component({
  selector: 'portfolio-landing',
  templateUrl: './landing.component.html',
  standalone: true,
  imports: [
    FooterComponent,
    ParticleTextComponent,
    IconComponent,
    ProjectListComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn(20, 3000)],
})
export class LandingComponent {
  chevronDownIcon = Icon.ChevronDoubleDown;

  scrollScreenDown() {
    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    window.scrollBy({
      top: height,
      left: 0,
      behavior: 'smooth',
    });
  }
}

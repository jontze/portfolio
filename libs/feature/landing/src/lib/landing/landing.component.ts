import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fadeIn } from '@jontze/ui/animations';
import { Icon } from '@jontze/ui/icon';

@Component({
  selector: 'portfolio-landing',
  templateUrl: './landing.component.html',
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

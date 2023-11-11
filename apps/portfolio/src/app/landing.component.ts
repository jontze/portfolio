import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '@jontze/ui/icon';

@Component({
  selector: 'portfolio-landing',
  templateUrl: './landing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

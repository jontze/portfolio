import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'portfolio-landing',
  templateUrl: './landing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
  ghLink = 'https://github.com/jontze';
  linkedinLink = 'https://www.linkedin.com/in/j0ntze/';
  xingLink = 'https://www.xing.com/profile/Jonathan_Schultze/';

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

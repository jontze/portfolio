import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Icon } from './icon';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronDoubleDownSolid } from '@ng-icons/heroicons/solid';
import {
  tablerBrandGithub,
  tablerStar,
  tablerGitFork,
  tablerCode,
  tablerBrandLinkedin,
  tablerBrandXing,
  tablerBrandRust,
  tablerBrandTypescript,
  tablerBrandJavascript,
} from '@ng-icons/tabler-icons';

@Component({
  selector: 'portfolio-icon',
  templateUrl: './icon.component.html',
  providers: [
    provideIcons({
      heroChevronDoubleDownSolid,
      tablerBrandGithub,
      tablerStar,
      tablerGitFork,
      tablerCode,
      tablerBrandLinkedin,
      tablerBrandXing,
      tablerBrandRust,
      tablerBrandTypescript,
      tablerBrandJavascript,
    }),
  ],
  imports: [NgIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() icon?: Icon;
}

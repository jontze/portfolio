import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Icon } from './icon';

@Component({
  selector: 'portfolio-icon',
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() icon?: Icon;
}

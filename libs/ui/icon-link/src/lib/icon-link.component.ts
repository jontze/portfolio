import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Icon, IconComponent } from '@jontze/ui/icon';

@Component({
  selector: 'portfolio-icon-link',
  templateUrl: './icon-link.component.html',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLinkComponent {
  @Input() iconLink?: string;
  @Input() icon?: Icon;
}

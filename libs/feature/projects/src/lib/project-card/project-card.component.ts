import {
  ChangeDetectionStrategy,
  Component,
  Input,
  WritableSignal,
  signal,
} from '@angular/core';
import { SmallSpinState, smallSpin } from '@jontze/ui/animations';
import { Icon } from '@jontze/ui/icon';

@Component({
  selector: 'portfolio-project-card',
  templateUrl: './project-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [smallSpin],
})
export class ProjectCardComponent {
  @Input() title?: string;
  @Input() description?: string;
  @Input() link?: string;
  @Input() starCount?: number;
  @Input() forkCount?: number;

  codeIcon = Icon.Code;
  starIcon = Icon.Star;
  forkIcon = Icon.Fork;
  ghIcon = Icon.Github;

  ghState: WritableSignal<SmallSpinState> = signal(SmallSpinState.NONE);

  mouseOverIcon(isOver: boolean) {
    this.ghState.set(isOver ? SmallSpinState.SPIN : SmallSpinState.NONE);
  }
}

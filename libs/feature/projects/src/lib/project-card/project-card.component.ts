import {
  ChangeDetectionStrategy,
  Component,
  Input,
  WritableSignal,
  signal,
} from '@angular/core';
import { SmallSpinState, smallSpin } from '@jontze/ui/animations';

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

  ghState: WritableSignal<SmallSpinState> = signal(SmallSpinState.NONE);

  mouseEnterGh() {
    this.ghState.set(SmallSpinState.SPIN);
  }

  mouseLeaveGh() {
    this.ghState.set(SmallSpinState.NONE);
  }
}

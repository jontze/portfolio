import {
  ChangeDetectionStrategy,
  Component,
  Input,
  WritableSignal,
  signal,
} from '@angular/core';
import { SmallSpinState, smallSpin } from '@jontze/ui/animations';

@Component({
  selector: 'portfolio-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [smallSpin],
})
export class FooterComponent {
  ghState: WritableSignal<SmallSpinState> = signal(SmallSpinState.NONE);
  xingState: WritableSignal<SmallSpinState> = signal(SmallSpinState.NONE);
  linkedinState: WritableSignal<SmallSpinState> = signal(SmallSpinState.NONE);

  @Input() public ghLink?: string;
  @Input() public xingLink?: string;
  @Input() public linkedinLink?: string;

  mouseEnterGh() {
    this.ghState.set(SmallSpinState.SPIN);
  }

  mouseLeaveGh() {
    this.ghState.set(SmallSpinState.NONE);
  }

  mouseEnterXing() {
    this.xingState.set(SmallSpinState.SPIN);
  }

  mouseLeaveXing() {
    this.xingState.set(SmallSpinState.NONE);
  }

  mouseEnterLinkedin() {
    this.linkedinState.set(SmallSpinState.SPIN);
  }

  mouseLeaveLinkedin() {
    this.linkedinState.set(SmallSpinState.NONE);
  }
}

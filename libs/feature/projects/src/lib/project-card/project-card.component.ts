import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  WritableSignal,
  signal,
} from '@angular/core';
import { SmallSpinState, smallSpin } from '@jontze/ui/animations';
import { CardComponent, CardTitleComponent } from '@jontze/ui/card';
import { Icon, IconComponent } from '@jontze/ui/icon';
import { IconLinkComponent } from '@jontze/ui/icon-link';
import { MouseOverDirective } from '@jontze/util/directive';

@Component({
  selector: 'portfolio-project-card',
  templateUrl: './project-card.component.html',
  standalone: true,
  imports: [
    IconComponent,
    NgIf,
    IconLinkComponent,
    MouseOverDirective,
    CardComponent,
    CardTitleComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [smallSpin],
})
export class ProjectCardComponent {
  @Input() title?: string;
  @Input() description?: string;
  @Input() link?: string;
  @Input() starCount?: number;
  @Input() forkCount?: number;
  @Input()
  get langIcon(): Icon | undefined {
    return this._langIcon;
  }

  set langIcon(value: Icon | string | undefined) {
    if (Object.values(Icon).includes(value as Icon)) {
      this._langIcon = value as Icon;
    } else {
      this._langIcon = undefined;
    }
  }

  private _langIcon?: Icon;

  codeIcon = Icon.Code;
  starIcon = Icon.Star;
  forkIcon = Icon.Fork;
  ghIcon = Icon.Github;

  ghState: WritableSignal<SmallSpinState> = signal(SmallSpinState.NONE);

  mouseOverIcon(isOver: boolean) {
    this.ghState.set(isOver ? SmallSpinState.SPIN : SmallSpinState.NONE);
  }
}

import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  signal,
} from '@angular/core';
import { SmallSpinState, smallSpin } from '@jontze/ui/animations';
import { Icon } from '@jontze/ui/icon';
import { IconLinkComponent } from '@jontze/ui/icon-link';
import { MouseOverDirective } from '@jontze/util/directive';

export interface FooterItem {
  link: string;
  icon: Icon;
  state: WritableSignal<SmallSpinState>;
}

@Component({
  selector: 'portfolio-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [IconLinkComponent, MouseOverDirective, NgFor],

  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [smallSpin],
})
export class FooterComponent {
  footerItems: FooterItem[] = [
    {
      link: 'https://github.com/jontze',
      icon: Icon.Github,
      state: signal(SmallSpinState.NONE),
    },
    {
      link: 'https://www.xing.com/profile/Jonathan_Schultze/',
      icon: Icon.Xing,
      state: signal(SmallSpinState.NONE),
    },
    {
      link: 'https://www.linkedin.com/in/j0ntze/',
      icon: Icon.Linkedin,
      state: signal(SmallSpinState.NONE),
    },
  ];

  onMouseOver(isOver: boolean, icon: Icon) {
    const item = this.footerItems.find((item) => item.icon === icon);
    if (item) {
      item.state.set(isOver ? SmallSpinState.SPIN : SmallSpinState.NONE);
    }
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'portfolio-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}

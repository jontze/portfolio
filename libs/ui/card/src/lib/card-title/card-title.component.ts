import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'portfolio-card-title',
  templateUrl: './card-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTitleComponent {}

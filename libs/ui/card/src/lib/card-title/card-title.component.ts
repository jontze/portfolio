import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'portfolio-card-title',
  templateUrl: './card-title.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTitleComponent {}

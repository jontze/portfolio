import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardTitleComponent } from './card-title/card-title.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardComponent, CardTitleComponent],
  exports: [CardComponent, CardTitleComponent],
})
export class CardModule {}

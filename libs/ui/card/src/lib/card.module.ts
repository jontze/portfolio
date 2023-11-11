import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardTitleComponent } from './card-title/card-title.component';
import { DirectiveModule } from '@jontze/util/directive';

@NgModule({
  imports: [CommonModule, DirectiveModule],
  declarations: [CardComponent, CardTitleComponent],
  exports: [CardComponent, CardTitleComponent],
})
export class CardModule {}

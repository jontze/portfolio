import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseOverDirective } from './mouse-over.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [MouseOverDirective],
  exports: [MouseOverDirective],
})
export class DirectiveModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseOverDirective } from './mouse-over.directive';
import { MousePositionDirective } from './mouse-position.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [MouseOverDirective, MousePositionDirective],
  exports: [MouseOverDirective, MousePositionDirective],
})
export class DirectiveModule {}

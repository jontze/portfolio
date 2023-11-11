import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconLinkComponent } from './icon-link.component';
import { DirectiveModule } from '@jontze/util/directive';
import { IconModule } from '@jontze/ui/icon';

@NgModule({
  imports: [CommonModule, DirectiveModule, IconModule],
  declarations: [IconLinkComponent],
  exports: [IconLinkComponent],
})
export class IconLinkModule {}

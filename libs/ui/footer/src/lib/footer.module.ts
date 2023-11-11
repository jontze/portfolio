import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { IconLinkModule } from '@jontze/ui/icon-link';
import { DirectiveModule } from '@jontze/util/directive';

@NgModule({
  imports: [CommonModule, IconLinkModule, DirectiveModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}

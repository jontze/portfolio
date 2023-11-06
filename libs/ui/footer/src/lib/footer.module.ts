import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroChevronDoubleDownSolid } from '@ng-icons/heroicons/solid';
import {
  tablerBrandGithub,
  tablerBrandLinkedin,
  tablerBrandXing,
} from '@ng-icons/tabler-icons';

@NgModule({
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      heroChevronDoubleDownSolid,
      tablerBrandLinkedin,
      tablerBrandXing,
      tablerBrandGithub,
    }),
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}

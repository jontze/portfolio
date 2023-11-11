import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import { heroChevronDoubleDownSolid } from '@ng-icons/heroicons/solid';
import {
  tablerBrandGithub,
  tablerStar,
  tablerGitFork,
  tablerCode,
  tablerBrandLinkedin,
  tablerBrandXing,
  tablerBrandRust,
  tablerBrandTypescript,
  tablerBrandJavascript,
} from '@ng-icons/tabler-icons';
import { IconComponent } from './icon.component';

@NgModule({
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      heroChevronDoubleDownSolid,
      tablerBrandGithub,
      tablerStar,
      tablerGitFork,
      tablerCode,
      tablerBrandLinkedin,
      tablerBrandXing,
      tablerBrandRust,
      tablerBrandTypescript,
      tablerBrandJavascript,
    }),
  ],
  declarations: [IconComponent],
  exports: [IconComponent],
})
export class IconModule {}

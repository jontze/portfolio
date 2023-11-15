import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './landing/landing.component';
import { IconModule } from '@jontze/ui/icon';
import { ParticleTextModule } from '@jontze/ui/particle-text';
import { FooterModule } from '@jontze/ui/footer';
import { ProjectsModule } from '@jontze/feature/projects';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    ParticleTextModule,
    FooterModule,
    ProjectsModule,
  ],
  exports: [LandingComponent],
  declarations: [LandingComponent],
  providers: [],
})
export class LandingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticleTextComponent } from './particle-text/particle-text.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ParticleTextComponent],
  exports: [ParticleTextComponent],
})
export class ParticleTextModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsService } from './services/projects.service';

@NgModule({
  imports: [CommonModule],
  providers: [ProjectsService],
})
export class ProjectsApiModule {}

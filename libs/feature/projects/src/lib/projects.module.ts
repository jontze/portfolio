import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { CardModule } from '@jontze/ui/card';
import { ProjectsApiModule } from '@jontze/data-access/projects-api';
import { ProjectRepoService } from './repos/project.repo.service';
import { IconLinkModule } from '@jontze/ui/icon-link';
import { DirectiveModule } from '@jontze/util/directive';
import { IconModule } from '@jontze/ui/icon';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    IconModule,
    IconLinkModule,
    DirectiveModule,
    ProjectsApiModule,
  ],
  declarations: [ProjectCardComponent, ProjectListComponent],
  exports: [ProjectListComponent],
  providers: [ProjectRepoService],
})
export class ProjectsModule {}

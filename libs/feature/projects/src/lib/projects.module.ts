import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { CardModule } from '@jontze/ui/card';
import { NgIconsModule } from '@ng-icons/core';
import {
  tablerBrandGithub,
  tablerStar,
  tablerGitFork,
  tablerCode,
} from '@ng-icons/tabler-icons';
import { ProjectsApiModule } from '@jontze/data-access/projects-api';
import { ProjectRepoService } from './repos/project.repo.service';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    NgIconsModule.withIcons({
      tablerBrandGithub,
      tablerStar,
      tablerGitFork,
      tablerCode,
    }),
    ProjectsApiModule,
  ],
  declarations: [ProjectCardComponent, ProjectListComponent],
  exports: [ProjectListComponent],
  providers: [ProjectRepoService],
})
export class ProjectsModule {}

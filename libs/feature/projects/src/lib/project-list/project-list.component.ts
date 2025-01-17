import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { provideProjectsApi } from '@jontze/data-access/projects-api';
import { toSignal } from '@angular/core/rxjs-interop';
import { fadeIn } from '@jontze/ui/animations';

import { ProjectRepoService } from '../repos/project.repo.service';
import { Project } from '../models/project.model';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'portfolio-project-list',
  templateUrl: './project-list.component.html',
  imports: [ProjectCardComponent],
  providers: [provideProjectsApi(), ProjectRepoService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn()],
})
export class ProjectListComponent {
  projects: Signal<Project[]> = toSignal(this.projectRepo.all(), {
    initialValue: [],
  });

  constructor(private readonly projectRepo: ProjectRepoService) {}
}

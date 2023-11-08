import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectRepoService } from '../repos/project.repo.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'portfolio-project-list',
  templateUrl: './project-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent {
  projects$: Observable<Project[]> = this.projectRepo.all();

  constructor(private readonly projectRepo: ProjectRepoService) {}

  trackBy(_index: number, project: Project): string {
    return project.link;
  }
}

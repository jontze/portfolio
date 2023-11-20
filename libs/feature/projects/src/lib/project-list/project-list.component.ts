import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectRepoService } from '../repos/project.repo.service';
import { Project } from '../models/project.model';
import { fadeIn } from '@jontze/ui/animations';

@Component({
  selector: 'portfolio-project-list',
  templateUrl: './project-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn()],
})
export class ProjectListComponent {
  projects: Signal<Project[]> = toSignal(this.projectRepo.all(), {
    initialValue: [],
  });

  constructor(private readonly projectRepo: ProjectRepoService) {}
}

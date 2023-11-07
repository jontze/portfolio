import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Project {
  title: string;
  description: string;
  link: string;
  starCount: number;
  forkCount: number;
}

@Component({
  selector: 'portfolio-project-list',
  templateUrl: './project-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent {
  projects$: Observable<Project[]> = of([
    {
      title: 'portfolio',
      description: 'This is the project you are looking at right now.',
      link: '',
      starCount: 0,
      forkCount: 0,
    },
    {
      title: 'action-mdbook',
      description:
        'Github action to setup mdbook and optional the linkcheck, mermaid, toc, open-on-gh, admonish or katex plugins',
      link: 'https://github.com/jontze/action-mdbook',
      starCount: 8,
      forkCount: 5,
    },
    {
      title: 'conventional-versioning',
      description:
        'Cli tool to detect the next version of your Git project based on a conventional commit history',
      link: 'https://github.com/jontze/conventional-versioning',
      starCount: 0,
      forkCount: 0,
    },
    {
      title: 'cloudi-gen',
      description: 'Generate Cloudi configuration files',
      link: 'https://github.com/jontze/cloudi-gen',
      starCount: 0,
      forkCount: 0,
    },
  ]);

  trackBy(_index: number, project: Project): string {
    return project.link;
  }
}

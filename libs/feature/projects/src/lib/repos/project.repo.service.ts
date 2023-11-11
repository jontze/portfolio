import { Injectable } from '@angular/core';
import { ProjectsService } from '@jontze/data-access/projects-api';
import { Observable, map } from 'rxjs';
import { Project } from '../models/project.model';
import { Icon } from '@jontze/ui/icon';

@Injectable()
export class ProjectRepoService {
  constructor(private readonly projectsApi: ProjectsService) {}

  all(): Observable<Project[]> {
    return this.projectsApi.getProjects().pipe(
      map((projects) =>
        projects.map((project) => {
          return {
            title: project.name,
            description: project.description,
            stars: project.stargazerCount,
            forks: project.forkCount,
            link: project.url,
            langIcon: this.mapLangIcon(project.primaryLanguage?.name),
          };
        })
      ),
      // Sort by stars
      map((projects) => {
        projects.sort((a, b) => {
          if (a.stars > b.stars) {
            return -1;
          }
          if (a.stars < b.stars) {
            return 1;
          }
          return 0;
        });
        return projects;
      })
    );
  }

  private mapLangIcon(lang?: string): Icon | undefined {
    switch (lang) {
      case 'Rust':
        return Icon.Rust;
      case 'TypeScript':
        return Icon.Typescript;
      case 'JavaScript':
        return Icon.Javascript;
      default:
        return undefined;
    }
  }
}

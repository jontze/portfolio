import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models';
import { Observable } from 'rxjs';
import { API_CONFIG_TOKEN } from '../token';

@Injectable()
export class ProjectsService {
  private readonly http = inject(HttpClient);
  private readonly projectsApiUrl = inject(API_CONFIG_TOKEN).url;

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsApiUrl);
  }
}

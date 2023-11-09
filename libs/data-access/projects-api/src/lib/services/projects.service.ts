import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectsService {
  constructor(private readonly http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(
      'https://jontze-portfolio-api.azurewebsites.net/api/projects'
    );
  }
}

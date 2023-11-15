import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models';
import { Observable } from 'rxjs';
import { PROJECTS_API_URL } from '../constants/url';

@Injectable()
export class ProjectsService {
  constructor(private readonly http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(PROJECTS_API_URL);
  }
}

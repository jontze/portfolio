import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ProjectsService } from './projects.service';
import { PROJECTS_API_URL } from '../constants/url';

describe('ProjectsService', () => {
  let service: ProjectsService;

  let mockHttpClient: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProjectsService);
    mockHttpClient = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return projects from api', (done) => {
    const mockProjects = [
      {
        id: '1',
        name: 'test',
        description: 'test',
        technologies: ['test'],
        links: [],
      },
    ];

    service.getProjects().subscribe((projects) => {
      expect(projects.length).toBeGreaterThan(0);
      done();
    });

    const req = mockHttpClient.expectOne(PROJECTS_API_URL);
    expect(req.request.method).toEqual('GET');
    req.flush(mockProjects);
  });
});

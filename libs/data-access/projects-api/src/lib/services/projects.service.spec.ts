import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { ProjectsService } from './projects.service';
import { API_CONFIG_TOKEN, ProjectsApiConfig } from '../token';
import { provideHttpClient } from '@angular/common/http';

describe('ProjectsService', () => {
  let service: ProjectsService;

  let mockHttpClient: HttpTestingController;

  const apiUrl = 'http://localhost:3333/api/projects';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProjectsService,
        {
          provide: API_CONFIG_TOKEN,
          useValue: {
            url: apiUrl,
          } as ProjectsApiConfig,
        },
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
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

    const req = mockHttpClient.expectOne(apiUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockProjects);
  });
});

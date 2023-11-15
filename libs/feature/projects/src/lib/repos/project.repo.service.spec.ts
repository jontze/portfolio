import { TestBed } from '@angular/core/testing';

import { ProjectRepoService } from './project.repo.service';
import { Project, ProjectsService } from '@jontze/data-access/projects-api';
import { of } from 'rxjs';
import { Icon } from '@jontze/ui/icon';

describe('ProjectRepoService', () => {
  let service: ProjectRepoService;

  const mockData: Project[] = [
    {
      name: 'test',
      description: 'test',
      stargazerCount: 1,
      forkCount: 3,
      url: 'test',
      primaryLanguage: {
        name: 'Unknown Language',
      },
      createdAt: 'some date',
      updatedAt: 'some date',
    },
    {
      name: 'test',
      description: 'test',
      stargazerCount: 10,
      forkCount: 3,
      url: 'test',
      primaryLanguage: {
        name: 'Rust',
      },
      createdAt: 'some date',
      updatedAt: 'some date',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProjectRepoService,
        {
          provide: ProjectsService,
          useValue: {
            getProjects: jest.fn().mockReturnValue(of(mockData)),
          },
        },
      ],
    });
    service = TestBed.inject(ProjectRepoService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return projects', (done) => {
    service.all().subscribe((projects) => {
      expect(projects.length).toBe(2);
      expect(projects[0].title).toBe('test');
      expect(projects[0].description).toBe('test');
      expect(projects[0].stars).toBe(10);
      expect(projects[0].forks).toBe(3);
      expect(projects[0].link).toBe('test');
      expect(projects[0].langIcon).toBe(Icon.Rust);
      done();
    });
  });

  it('should sort projects by stars', (done) => {
    service.all().subscribe((projects) => {
      expect(projects.length).toBe(2);
      expect(projects[0].stars).toBe(10);
      expect(projects[1].stars).toBe(1);
      done();
    });
  });

  it('should return undefined if language is not mapped', (done) => {
    service.all().subscribe((projects) => {
      expect(projects.length).toBe(2);
      expect(projects[1].langIcon).toBeUndefined();
      done();
    });
  });

  it('should have called api', (done) => {
    const projectsApi = TestBed.inject(ProjectsService);
    service.all().subscribe(() => {
      expect(projectsApi.getProjects).toHaveBeenCalled();
      done();
    });
  });
});

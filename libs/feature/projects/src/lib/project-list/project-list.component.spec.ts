import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ProjectListComponent } from './project-list.component';
import { Project } from '../models/project.model';
import { Icon } from '@jontze/ui/icon';
import { of } from 'rxjs';
import { ProjectRepoService } from '../repos/project.repo.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { setupIntersectionObserverMock } from '@jontze/util/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  provideProjectsApi,
  withApiConfig,
} from '@jontze/data-access/projects-api';

describe('ProjectListComponent', () => {
  let component: ProjectListComponent;
  let fixture: ComponentFixture<ProjectListComponent>;

  const mockProjects: Project[] = [
    {
      title: 'Project Title',
      description: 'Project Description',
      link: 'https://project.link',
      forks: 0,
      stars: 0,
      langIcon: Icon.Rust,
    },
  ];

  beforeEach(async () => {
    setupIntersectionObserverMock();
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, ProjectListComponent],
      providers: [
        provideProjectsApi(
          withApiConfig({
            useValue: {
              url: 'http://localhost:3333/api/projects',
            },
          })
        ),
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ProjectRepoService,
          useValue: {
            all: jest.fn().mockReturnValue(of(mockProjects)),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have project cards if deferred condition not completed', () => {
    const projectCards = fixture.nativeElement.querySelectorAll(
      'portfolio-project-card'
    );
    expect(projectCards.length).toEqual(0);
  });

  it('should have title', () => {
    const title = fixture.nativeElement.querySelector(
      '[data-test="project-list-title"]'
    );
    expect(title).toBeTruthy();
  });
});

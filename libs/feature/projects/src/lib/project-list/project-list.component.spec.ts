import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectListComponent } from './project-list.component';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../models/project.model';
import { Icon, IconModule } from '@jontze/ui/icon';
import { of } from 'rxjs';
import { ProjectRepoService } from '../repos/project.repo.service';
import { CardModule } from '@jontze/ui/card';
import { IconLinkModule } from '@jontze/ui/icon-link';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
    await TestBed.configureTestingModule({
      declarations: [ProjectListComponent, ProjectCardComponent],
      imports: [CardModule, IconModule, IconLinkModule, NoopAnimationsModule],
      providers: [
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

  it('should load proejcts from api', () => {
    const projectsRepo = TestBed.inject(ProjectRepoService);
    const projects = component.projects();
    expect(projectsRepo.all).toHaveBeenCalled();
    expect(projects).toEqual(mockProjects);
  });

  it('should have project card for each project', () => {
    const projectCards = fixture.nativeElement.querySelectorAll(
      'portfolio-project-card'
    );
    expect(projectCards.length).toEqual(mockProjects.length);
  });

  it('should have title', () => {
    const title = fixture.nativeElement.querySelector(
      '[data-test="project-list-title"]'
    );
    expect(title).toBeTruthy();
  });
});

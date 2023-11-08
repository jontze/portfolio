import { TestBed } from '@angular/core/testing';

import { ProjectRepoService } from './project.repo.service';

describe('ProjectService', () => {
  let service: ProjectRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

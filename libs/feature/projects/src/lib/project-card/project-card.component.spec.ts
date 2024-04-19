import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ProjectCardComponent } from './project-card.component';
import { Icon } from '@jontze/ui/icon';
import { SmallSpinState } from '@jontze/ui/animations';

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, ProjectCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update ghState on mouseOverIcon', () => {
    expect(component.ghState()).toEqual(SmallSpinState.NONE);
    component.mouseOverIcon(true);
    expect(component.ghState()).toEqual(SmallSpinState.SPIN);
    component.mouseOverIcon(false);
    expect(component.ghState()).toEqual(SmallSpinState.NONE);
  });

  it('should use string of Icon as langIcon', () => {
    fixture.componentRef.setInput('langIcon', Icon.Github);
    fixture.detectChanges();
    expect(component.langIcon).toEqual('tablerBrandGithub');
  });

  it('should return undefined if unknown Icon is passed as langIcon', () => {
    fixture.componentRef.setInput('langIcon', 'unknownIcon');
    fixture.detectChanges();
    expect(component.langIcon).toBeUndefined();
  });

  it('should have projec title in card title', () => {
    const title = 'Project Title';
    fixture.componentRef.setInput('title', title);
    fixture.detectChanges();
    const titleElement = fixture.nativeElement.querySelector(
      'portfolio-card-title [data-test="project-title"]'
    );
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent.trim()).toEqual('Project Title');
  });

  it('should have project description in card content', () => {
    const description = 'Project Description';
    fixture.componentRef.setInput('description', description);
    fixture.detectChanges();
    const descriptionElement = fixture.nativeElement.querySelector(
      '[data-test="project-card-content"] [data-test="project-description"]'
    );
    expect(descriptionElement).toBeTruthy();
    expect(descriptionElement.textContent.trim()).toEqual(
      'Project Description'
    );
  });

  it('should have project stars in footer', () => {
    const starCount = 42;
    fixture.componentRef.setInput('starCount', starCount);
    fixture.detectChanges();
    const starElement = fixture.nativeElement.querySelector(
      '[data-test="project-card-footer"] [data-test="project-stars"]'
    );
    expect(starElement).toBeTruthy();
    expect(starElement.textContent.trim()).toEqual('42');
  });

  it('should have project forks in footer', () => {
    const forkCount = 42;
    fixture.componentRef.setInput('forkCount', forkCount);
    fixture.detectChanges();
    const forkElement = fixture.nativeElement.querySelector(
      '[data-test="project-card-footer"] [data-test="project-forks"]'
    );
    expect(forkElement).toBeTruthy();
    expect(forkElement.textContent.trim()).toEqual('42');
  });

  it('should have lang in footer if langIcon is set', () => {
    fixture.componentRef.setInput('langIcon', Icon.Github);
    fixture.detectChanges();
    const langElement = fixture.nativeElement.querySelector(
      '[data-test="project-card-footer"] [data-test="project-lang"]'
    );
    expect(langElement).toBeTruthy();
  });

  it('should not have lang in footer if langIcon is not set', () => {
    const langElement = fixture.nativeElement.querySelector(
      '[data-test="project-card-footer"] [data-test="project-lang"]'
    );
    expect(langElement).toBeFalsy();
  });
});

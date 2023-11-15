import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LandingComponent } from './landing.component';
import { Icon, IconModule } from '@jontze/ui/icon';
import { FooterModule } from '@jontze/ui/footer';
import { ProjectsModule } from '@jontze/feature/projects';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingComponent],
      imports: [
        NoopAnimationsModule,
        IconModule,
        FooterModule,
        ProjectsModule,
        HttpClientTestingModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should scroll screen down', () => {
    const spy = jest.spyOn(window, 'scrollBy');
    component.scrollScreenDown();
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        top: expect.any(Number),
        left: 0,
        behavior: 'smooth',
      })
    );
  });

  it('should scroll down on click chevron down icon', () => {
    const spyScroll = jest.spyOn(component, 'scrollScreenDown');
    const scrollEl = fixture.nativeElement.querySelector(
      '[data-test="scroll-down"]'
    );
    expect(scrollEl).toBeTruthy();
    scrollEl.click();
    expect(spyScroll).toHaveBeenCalled();
  });

  it('should have multiple footer', () =>
    expect(
      fixture.nativeElement.querySelectorAll('portfolio-footer').length
    ).toBe(2));

  it('should have project list', () => {
    expect(
      fixture.nativeElement.querySelector('portfolio-project-list')
    ).toBeTruthy();
  });

  it('should have chevron down icon', () => {
    expect(fixture.nativeElement.querySelector('portfolio-icon')).toBeTruthy();
    expect(component.chevronDownIcon === Icon.ChevronDoubleDown).toBe(true);
  });

  it('should have particle text', () => {
    expect(
      fixture.nativeElement.querySelector('portfolio-particle-text')
    ).toBeTruthy();
  });
});

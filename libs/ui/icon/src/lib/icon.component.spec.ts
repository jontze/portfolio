import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent } from './icon.component';
import { NgIconsModule } from '@ng-icons/core';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconComponent],
      imports: [NgIconsModule.withIcons({})],
    }).compileComponents();

    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have ng-icon with provided icon', () => {
    fixture.componentRef.setInput('icon', 'github');
    fixture.detectChanges();
    const icon = fixture.nativeElement.querySelector('ng-icon');
    expect(icon).toBeTruthy();
  });
});

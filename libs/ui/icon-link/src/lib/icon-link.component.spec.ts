import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconLinkComponent } from './icon-link.component';
import { IconModule } from '@jontze/ui/icon';

describe('IconLinkComponent', () => {
  let component: IconLinkComponent;
  let fixture: ComponentFixture<IconLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconLinkComponent],
      imports: [IconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(IconLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a tag with link', () => {
    fixture.componentRef.setInput('iconLink', 'https://www.google.com');
    fixture.detectChanges();
    const link = fixture.nativeElement.querySelector('a');
    expect(link.href).toEqual('https://www.google.com/');
  });

  it('should have icon component inside link', () => {
    fixture.componentRef.setInput('icon', 'github');
    fixture.detectChanges();
    const icon = fixture.nativeElement.querySelector('a portfolio-icon');
    expect(icon).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SmallSpinState } from '@jontze/ui/animations';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have entry for each footer item', () => {
    const footerItems = fixture.nativeElement.querySelectorAll(
      'portfolio-icon-link'
    );
    expect(footerItems.length).toEqual(component.footerItems.length);
  });

  it('should update signal of footer item on mouse over', () => {
    const footerItem = component.footerItems[0];

    component.onMouseOver(true, footerItem.icon);
    expect(footerItem.state()).toEqual(SmallSpinState.SPIN);

    component.onMouseOver(false, footerItem.icon);
    expect(footerItem.state()).toEqual(SmallSpinState.NONE);
  });
});

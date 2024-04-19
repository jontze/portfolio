import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update mouse position on mouse over', () => {
    const event = { xPixel: 10, yPixel: 20 };
    component.onMouseMoveOnCard(event);
    expect(component.mouseX()).toEqual(event.xPixel);
    expect(component.mouseY()).toEqual(event.yPixel);
    expect(component.mouseStyle()).toEqual({
      '--mouse-x': `${event.xPixel}px`,
      '--mouse-y': `${event.yPixel}px`,
    });
  });
});

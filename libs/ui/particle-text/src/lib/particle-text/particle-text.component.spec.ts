import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParticleTextComponent } from './particle-text.component';

describe('ParticleTextComponent', () => {
  let component: ParticleTextComponent;
  let fixture: ComponentFixture<ParticleTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParticleTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParticleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

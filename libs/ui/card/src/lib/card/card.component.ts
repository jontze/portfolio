import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';

@Component({
  selector: 'portfolio-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  mouseX: WritableSignal<number> = signal(0);
  mouseY: WritableSignal<number> = signal(0);

  mouseStyle = computed(() => ({
    '--mouse-x': `${this.mouseX()}px`,
    '--mouse-y': `${this.mouseY()}px`,
  }));

  onMouseMoveOnCard(event: { xPixel: number; yPixel: number }): void {
    this.mouseX.set(event.xPixel);
    this.mouseY.set(event.yPixel);
  }
}

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { Effect } from './effect';

@Component({
  selector: 'portfolio-particle-text',
  templateUrl: './particle-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticleTextComponent implements AfterViewInit {
  @ViewChild('canvas') public canvas!: ElementRef<HTMLCanvasElement>;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.effect == null) {
      throw new Error('Effect not initialized');
    }
    this.effect.mouse.x = event.x;
    this.effect.mouse.y = event.y;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.effect == null) {
      throw new Error('Effect not initialized');
    }
    this.canvas.nativeElement.height = window.innerHeight;
    this.canvas.nativeElement.width = document.body.clientWidth;
    this.effect.resize(
      this.canvas.nativeElement.width,
      this.canvas.nativeElement.height
    );
    this.effect.wrapText(this.text ?? 'Hello Canvas!');
  }

  @Input() text?: string;

  private ctx?: CanvasRenderingContext2D | null;
  private effect?: Effect;

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d', {
      willReadFrequently: true,
    });
    if (this.ctx == null) {
      throw new Error('Could not get canvas context');
    }

    this.canvas.nativeElement.height = window.innerHeight;
    this.canvas.nativeElement.width = window.innerWidth;

    this.effect = new Effect(
      this.ctx,
      this.canvas.nativeElement.width,
      this.canvas.nativeElement.height
    );
    this.effect.wrapText(this.text ?? 'Hello Canvas!');
    this.effect.render();
    this.animate();
  }

  private animate() {
    if (this.ctx == null || this.effect == null) {
      throw new Error('Could not get canvas context or effect');
    }
    this.ctx.clearRect(
      0,
      0,
      this.canvas.nativeElement.width,
      this.canvas.nativeElement.height
    );
    this.effect.render();
    requestAnimationFrame(this.animate.bind(this));
  }
}

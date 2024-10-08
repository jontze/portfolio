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
  standalone: true,
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
    // Only resize if the width has changed. This is important as
    // otherwise we reisze the canvas on mobile devices during
    // vertical scrolling.
    if (this.canvas.nativeElement.width !== document.body.clientWidth) {
      this.canvas.nativeElement.height = window.innerHeight;
      this.canvas.nativeElement.width = document.body.clientWidth;
      this.effect.resize(
        this.canvas.nativeElement.width,
        this.canvas.nativeElement.height
      );
      this.effect.wrapText(this.text ?? 'Hello Canvas!');
    }
  }

  // Copilot: Get the amount of pixels scrolled down
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.effect == null) {
      throw new Error('Effect not initialized');
    }
    this.effect.mouse.scroll = window.scrollY;
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
    this.canvas.nativeElement.width = document.body.clientWidth;

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

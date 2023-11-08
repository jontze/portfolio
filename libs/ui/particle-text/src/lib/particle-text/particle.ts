import { Effect } from './effect';

export class Particle {
  // Float from a random position on the canvas to the origin position
  private x: number = Math.random() * this.effect.canvasWidth;
  private y: number = this.effect.canvasHeight;
  private originX: number;
  private originY: number;
  private size: number = this.effect.gap;

  // Distance between mourse course and particle horizontal position
  private dx = 0;
  // Distance between mourse course and particle vertical position
  private dy = 0;
  // Horizontal speed
  private vx = 0;
  // Vertical speed
  private vy = 0;
  private force = 0;
  private angle = 0;
  private distance = 0;
  private readonly friction = Math.random() * 0.6 + 0.15;
  private readonly ease = Math.random() * 0.1 + 0.005;

  constructor(
    private readonly effect: Effect,
    x: number,
    y: number,
    private readonly color: string
  ) {
    this.originX = x;
    this.originY = y;
  }

  draw() {
    // Very performance heavy
    // TODO: Optimize - check if the color of the particles is
    // different then the previous one
    this.effect.context.fillStyle = this.color;

    this.effect.context.fillRect(this.x, this.y, this.size, this.size);
  }

  update() {
    this.dx = this.effect.mouse.x - this.x;
    this.dy = this.effect.mouse.y + this.effect.mouse.scroll - this.y;

    // Calc distance between particle an mouse courser
    this.distance = this.dx * this.dx + this.dy * this.dy;

    // Calc the force of the particle
    this.force = -this.effect.mouse.radius / this.distance;

    // If the distance is smaller then the radius of the mouse
    // then the particle should move
    if (this.distance < this.effect.mouse.radius) {
      // Calc an angel between the particle and the mouse
      this.angle = Math.atan2(this.dy, this.dx);

      // Calc the speed of the particle
      this.vx += this.force * Math.cos(this.angle);
      this.vy += this.force * Math.sin(this.angle);
    } else {
      // Float around at origin
      this.floatAroundAtOrigin();
    }

    this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
    this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
  }

  private floatAroundAtOrigin() {
    this.vx += Math.random() * 0.2 - 0.1;
    this.vy += Math.random() * 0.2 - 0.1;
  }
}

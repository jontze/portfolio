import { Particle } from './particle';

export class Effect {
  private textX = this.canvasWidth / 2;
  private textY = this.canvasHeight / 2;
  private fontSize = 300;
  private lineHeight = this.fontSize * 0.8;
  private maxTextWidth = this.canvasWidth * 0.8;
  private particles: Particle[] = [];
  private particlesThinningFactor = 2;
  public gap = 1;
  public mouse = {
    radius: 10000,
    x: 0,
    y: 0,
  };

  constructor(
    public readonly context: CanvasRenderingContext2D,
    public canvasWidth: number,
    public canvasHeight: number
  ) {
    this.defineTextSize(canvasWidth);
  }

  wrapText(text: string) {
    // canvas settings
    const gradient = this.context.createLinearGradient(
      0,
      0,
      this.canvasWidth,
      this.canvasHeight
    );
    gradient.addColorStop(0.3, 'red');
    gradient.addColorStop(0.6, 'fuchsia');
    gradient.addColorStop(1, 'purple');
    this.context.fillStyle = gradient;
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.lineWidth = 3;
    this.context.strokeStyle = 'white';
    this.context.font = `${this.fontSize}px Helvetica`;

    // break multiline text
    const linesArray = [];
    const words = text.split(' ');
    let lineCounter = 0;
    let line = '';
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      if (this.context.measureText(testLine).width > this.maxTextWidth) {
        line = words[i] + ' ';
        lineCounter++;
      } else {
        line = testLine;
      }
      linesArray[lineCounter] = line;
    }
    const textHeight = this.lineHeight * lineCounter;
    this.textY = this.canvasHeight / 2 - textHeight / 2;
    linesArray.forEach((el, index) => {
      this.context.fillText(
        el,
        this.textX,
        this.textY + index * this.lineHeight
      );
      this.context.strokeText(
        el,
        this.textX,
        this.textY + index * this.lineHeight
      );
    });
    this.convertToParticles();
  }

  convertToParticles() {
    this.particles = [];
    const pixels = this.context.getImageData(
      0,
      0,
      this.canvasWidth,
      this.canvasHeight
    ).data;
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    // Go over the pixles of the canvas (by gap) from top to bottom,
    // from left to right
    for (let y = 0; y < this.canvasHeight; y += this.gap) {
      for (let x = 0; x < this.canvasWidth; x += this.gap) {
        // Get the pixel index
        const pixelIndex = (y * this.canvasWidth + x) * 4;
        const alpha = pixels[pixelIndex + 3];
        // Only take the pixles that are not transparent
        if (alpha > 0) {
          // Construct rgba color
          const red = pixels[pixelIndex];
          const green = pixels[pixelIndex + 1];
          const blue = pixels[pixelIndex + 2];
          const color = `rgb(${red}, ${green}, ${blue})`;

          // Create a new particle
          this.particles.push(new Particle(this, x, y, color));
        }
      }
    }
    // Thinning the particles array
    this.particles = this.particles.filter(
      (_, index) => index % this.particlesThinningFactor === 0
    );
  }

  render() {
    this.particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });
  }

  resize(width: number, height: number) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.textX = this.canvasWidth / 2;
    this.textY = this.canvasHeight / 2;
    this.maxTextWidth = this.canvasWidth * 0.8;
    this.defineTextSize(width);
  }

  private defineTextSize(width: number) {
    if (width > 1800) {
      this.fontSize = 400;
      this.lineHeight = this.fontSize * 0.8;
    } else if (width > 1200) {
      this.fontSize = 300;
      this.lineHeight = this.fontSize * 0.8;
    } else if (width > 1000) {
      this.fontSize = 250;
      this.lineHeight = this.fontSize * 0.8;
    } else if (width > 800) {
      this.fontSize = 200;
      this.lineHeight = this.fontSize * 0.8;
    } else if (width > 730) {
      this.fontSize = 180;
      this.lineHeight = this.fontSize * 0.8;
    } else if (width > 407) {
      this.fontSize = 100;
      this.lineHeight = this.fontSize * 0.8;
    } else {
      this.fontSize = 70;
      this.lineHeight = this.fontSize * 0.8;
    }
  }
}

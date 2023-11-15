import { ElementRef } from '@angular/core';
import { MousePositionDirective } from './mouse-position.directive';

describe('MousePositionDirective', () => {
  const generateMockElementRef = (
    clientWidth: number = 100,
    clientHeight: number = 100,
    rectLeft: number = 0,
    rectTop: number = 0
  ): ElementRef => {
    return {
      nativeElement: {
        clientWidth,
        clientHeight,
        getBoundingClientRect: () => {
          return {
            left: rectLeft,
            top: rectTop,
          };
        },
      },
    } as ElementRef;
  };

  it('should create an instance', () => {
    const elementRef = generateMockElementRef();
    const directive = new MousePositionDirective(elementRef);
    expect(directive).toBeTruthy();
  });

  it('should emit mouse move', (done) => {
    const elementRef = generateMockElementRef(100, 100, 10, 10);
    const directive = new MousePositionDirective(elementRef);
    directive.ngOnInit();

    directive.mouseMoveOnElement.subscribe((value) => {
      expect(value).toEqual({ xPixel: 10, yPixel: 10 });
      done();
    });

    directive.onMouseMove({ clientX: 20, clientY: 20 } as MouseEvent);
  });

  it('should not emit mouse move if mouse is outside element', () => {
    const elementRef = generateMockElementRef(100, 100, 110, 120);
    const directive = new MousePositionDirective(elementRef);
    directive.ngOnInit();

    directive.mouseMoveOnElement.subscribe(() => {
      fail('should not emit');
    });

    directive.onMouseMove({ clientX: 0, clientY: 0 } as MouseEvent);
  });

  it('should not emit mouse move if smaller than 0', () => {
    const elementRef = generateMockElementRef(100, 100, 0, 0);
    const directive = new MousePositionDirective(elementRef);
    directive.ngOnInit();

    directive.mouseMoveOnElement.subscribe(() => {
      fail('should not emit');
    });

    directive.onMouseMove({ clientX: -10, clientY: -10 } as MouseEvent);
  });

  it('should not emit mouse move if no mouse move', () => {
    const elementRef = generateMockElementRef(100, 100, 0, 0);
    const directive = new MousePositionDirective(elementRef);
    directive.ngOnInit();

    directive.mouseMoveOnElement.subscribe(() => {
      fail('should not emit');
    });

    directive.onMouseMove({ clientX: 0, clientY: 0 } as MouseEvent);
  });
});

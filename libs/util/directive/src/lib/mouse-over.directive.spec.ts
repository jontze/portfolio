import { MouseOverDirective } from './mouse-over.directive';

describe('MouseOverDirective', () => {
  it('should create an instance', () => {
    const directive = new MouseOverDirective();
    expect(directive).toBeTruthy();
  });

  it("should emit 'true' on 'mouseenter' event", () => {
    const directive = new MouseOverDirective();
    directive.isOver.subscribe((value) => expect(value).toBe(true));
    directive.onMouseEnter();
  });

  it("should emit 'false' on 'mouseleave' event", () => {
    const directive = new MouseOverDirective();
    directive.isOver.subscribe((value) => expect(value).toBe(false));
    directive.onMouseLeave();
  });
});

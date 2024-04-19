import { MouseOverDirective } from './lib/mouse-over.directive';
import { MousePositionDirective } from './lib/mouse-position.directive';

export * from './lib/mouse-over.directive';
export * from './lib/mouse-position.directive';

export const UTIL_DIRECTIVES = [
  MouseOverDirective,
  MousePositionDirective,
] as const;

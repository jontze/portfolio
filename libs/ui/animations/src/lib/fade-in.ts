import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeIn = (distancePx: number = 20, animationMs: number = 2000) =>
  trigger('fadeIn', [
    state(
      'void',
      style({ opacity: 0, transform: `translateY(${distancePx}px)` })
    ),
    state('*', style({ opacity: 1, transform: 'translateY(0)' })),
    transition('void => *', animate(`${animationMs}ms ease-in-out`)),
  ]);

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeIn = (distancePx = 20, animationMs = 2000) =>
  trigger('fadeIn', [
    state(
      'void',
      style({ opacity: 0, transform: `translateY(${distancePx}px)` })
    ),
    state('*', style({ opacity: 1, transform: 'translateY(0)' })),
    transition('void => *', animate(`${animationMs}ms ease-in-out`)),
  ]);

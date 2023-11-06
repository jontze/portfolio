import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export enum SmallSpinState {
  NONE = 'none',
  SPIN = 'tiny-spin',
}

export const smallSpin = trigger('smallSpin', [
  state(SmallSpinState.NONE, style({ transform: 'rotate(0deg)' })),
  state(SmallSpinState.SPIN, style({ transform: 'rotate(45deg)' })),
  transition(
    `${SmallSpinState.NONE} <=> ${SmallSpinState.SPIN}`,
    animate('200ms ease-in-out')
  ),
]);

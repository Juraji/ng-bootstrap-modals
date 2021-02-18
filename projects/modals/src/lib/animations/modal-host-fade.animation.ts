import {animate, state, style, transition, trigger} from '@angular/animations';

export const MODAL_HOST_FADE_ANIMATION = trigger('modalFade', [
  state('void', style({opacity: 0})),
  state('*', style({opacity: 1})),
  transition('void => *', animate('350ms ease-out'))
]);

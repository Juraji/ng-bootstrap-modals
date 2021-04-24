import {animate, state, style, transition, trigger} from '@angular/animations';

export const MODAL_HOST_FADE_ANIMATION = trigger('modalFade', [
  state('void', style({opacity: 0, transform: 'translateY(-50px)'})),
  state('*', style({opacity: 1, transform: 'translateY(0px)'})),
  transition('void => *', animate('350ms ease-out'))
]);

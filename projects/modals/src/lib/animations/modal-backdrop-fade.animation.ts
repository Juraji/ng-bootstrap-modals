import {animate, state, style, transition, trigger} from '@angular/animations';

export const MODAL_BACKDROP_FADE_ANIMATION = trigger('modalFade', [
  state('void', style({opacity: 0})),
  state('*', style({opacity: 0.5})),
  transition('void => *', animate(350))
]);

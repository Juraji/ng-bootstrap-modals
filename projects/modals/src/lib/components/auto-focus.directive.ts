import {Directive} from '@angular/core';

/**
 * When added to a control within your modal component, the modal host will make sure this control is active when the modal is rendered.
 */
@Directive({selector: '[ngbmodAutoFocus]'})
export class AutoFocusDirective {
}

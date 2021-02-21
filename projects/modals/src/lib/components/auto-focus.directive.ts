import {AfterViewInit, Directive, ElementRef, Renderer2} from '@angular/core';

const AUTO_FOCUS_ELEMENTS_SELECTOR =
  'a[href][ngbmodAutoFocus],' +
  'button[ngbmodAutoFocus]:not([disabled]),' +
  'input[ngbmodAutoFocus]:not([disabled]):not([type=\'hidden\']),' +
  'select[ngbmodAutoFocus]:not([disabled]),' +
  'textarea[ngbmodAutoFocus]:not([disabled]),' +
  '[contenteditable][ngbmodAutoFocus],' +
  '[tabindex][ngbmodAutoFocus]:not([tabindex=\'-1\']),';

/**
 * When added to a control within your modal component, this directive will set focus the element.
 * Note that using the component on multiple elements in a view might cause unexpected behaviour.
 */
@Directive({selector: AUTO_FOCUS_ELEMENTS_SELECTOR})
export class AutoFocusDirective implements AfterViewInit {

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2,
  ) {
  }

  ngAfterViewInit(): void {
    this.renderer.selectRootElement(this.elementRef.nativeElement).focus();
  }
}

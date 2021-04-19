import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

const AUTO_FOCUS_ELEMENTS_SELECTOR =
  'a[href][modalAutoFocus],' +
  'button[modalAutoFocus]:not([disabled]),' +
  'input[modalAutoFocus]:not([disabled]):not([type=\'hidden\']),' +
  'select[modalAutoFocus]:not([disabled]),' +
  'textarea[modalAutoFocus]:not([disabled]),' +
  '[contenteditable][modalAutoFocus],' +
  '[tabindex][modalAutoFocus]:not([tabindex=\'-1\']),';

/**
 * When added to a control within your modal component, this directive will set focus to the element.
 * Note that using the component on multiple elements in a view might cause unexpected behaviour.
 */
@Directive({selector: AUTO_FOCUS_ELEMENTS_SELECTOR})
export class AutoFocusDirective implements AfterViewInit {

  @Input()
  public selectText: boolean = false;

  constructor(
    private readonly elementRef: ElementRef,
  ) {
  }

  ngAfterViewInit(): void {
    const e = this.elementRef.nativeElement;

    if (typeof e.focus === 'function') {
      e.focus();

      if (typeof e.select === 'function') {
        e.select();
      }
    }
  }
}

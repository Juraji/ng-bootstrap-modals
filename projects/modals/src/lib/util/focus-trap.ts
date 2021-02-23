import {fromEvent, Observable} from 'rxjs';
import {filter, map, takeUntil, withLatestFrom} from 'rxjs/operators';

const FOCUSABLE_ELEMENTS_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type=\'hidden\'])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[contenteditable]',
  '[tabindex]:not([tabindex=\'-1\'])',
].join(', ');

export const getFocusableBoundaryElements = (element: HTMLElement): HTMLElement[] => {
  const list: HTMLElement[] = Array.from(element.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR) as NodeListOf<HTMLElement>).filter(
    el => el.tabIndex !== -1
  );
  return [list[0], list.slice(-1)[0]];
};

export const focusTrap = (element: HTMLElement, stopFocusTrap: Observable<any>, refocusOnClick = false): void => {
  const lastFocusedElement = fromEvent<FocusEvent>(element, 'focusin').pipe(
    takeUntil(stopFocusTrap),
    map(e => e.target)
  );

  fromEvent<KeyboardEvent>(element, 'keydown')
    .pipe(
      takeUntil(stopFocusTrap),
      filter(e => e.key === 'Tab'),
      withLatestFrom(lastFocusedElement)
    )
    .subscribe(([tabEvent, focusedElement]) => {
      const [first, last] = getFocusableBoundaryElements(element);

      if ((focusedElement === first || focusedElement === element) && tabEvent.shiftKey) {
        last.focus();
        tabEvent.preventDefault();
      }

      if (focusedElement === last && !tabEvent.shiftKey) {
        first.focus();
        tabEvent.preventDefault();
      }
    });

  // inside click
  if (refocusOnClick) {
    fromEvent(element, 'click')
      .pipe(
        takeUntil(stopFocusTrap),
        withLatestFrom(lastFocusedElement),
        map(arr => arr[1] as HTMLElement)
      )
      .subscribe(e => e.focus());
  }
};

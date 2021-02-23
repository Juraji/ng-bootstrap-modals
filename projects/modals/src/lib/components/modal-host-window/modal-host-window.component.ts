import {DOCUMENT} from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {fromEvent} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';

import {MODAL_HOST_FADE_ANIMATION} from '../../animations/modal-host-fade.animation';
import {buildClassList} from '../../util/build-class-list';
import {getFocusableBoundaryElements} from '../../util/focus-trap';

export const MODAL_HOST_WINDOW_PROPS: (keyof ModalHostWindowComponent)[] = [
  'size',
  'ariaLabelledBy',
  'backdrop',
  'centered',
  'keyboard',
  'scrollable',
  'windowClass'
];

@Component({
  templateUrl: './modal-host-window.component.html',
  animations: [MODAL_HOST_FADE_ANIMATION]
})
export class ModalHostWindowComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  private elementWithFocus: Element;
  private readonly document: Document;

  @HostBinding('@modalFade') public readonly fadeAnimation = true;
  @HostBinding('class') public hostClassList = 'modal d-block';
  public classList = 'modal-dialog';

  @Output() public readonly dismissed = new EventEmitter<void>();
  @Input() public size: 'sm' | 'md' | 'lg';
  @Input() public ariaLabelledBy: string;
  @Input() public backdrop: boolean | 'static';
  @Input() public centered: boolean;
  @Input() public keyboard: boolean;
  @Input() public scrollable: boolean;
  @Input() public windowClass: string;

  @ViewChild('modalContentOutlet', {static: true, read: ViewContainerRef})
  public readonly modalContentOutlet: ViewContainerRef;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly ngZone: NgZone,
    @Inject(DOCUMENT) document: any
  ) {
    // Workaround for https://github.com/angular/angular/issues/20351
    this.document = document;
  }

  public ngOnInit(): void {
    this.elementWithFocus = this.document.activeElement;

    this.ngZone.runOutsideAngular(() =>
      fromEvent<KeyboardEvent>(this.elementRef.nativeElement, 'keyup')
        .pipe(
          takeUntil(this.dismissed),
          filter(e => e.key === 'Escape')
        )
        .subscribe(e =>
          requestAnimationFrame(() => {
            if (!e.defaultPrevented) {
              this.ngZone.run(() => this.dismiss());
            }
          })
        )
    );
  }

  public ngAfterViewInit(): void {
    if (!this.elementRef.nativeElement.contains(document.activeElement)) {
      const autoFocusable = this.elementRef.nativeElement.querySelector(`[albAutofocus]`) as HTMLElement;
      const firstFocusable = getFocusableBoundaryElements(this.elementRef.nativeElement)[0];

      const elementToFocus = autoFocusable || firstFocusable || this.elementRef.nativeElement;
      elementToFocus.focus();
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('size') || changes.hasOwnProperty('centered') || changes.hasOwnProperty('scrollable')) {
      this.updateClassList();
    }

    if (changes.hasOwnProperty('windowClass')) {
      this.updateHostClassList();
    }
  }

  public ngOnDestroy(): void {
    const body = this.document.body;

    let elementToFocus: Element;
    if (this.elementWithFocus && this.elementWithFocus.hasOwnProperty('focus') && body.contains(this.elementWithFocus)) {
      elementToFocus = this.elementWithFocus;
    } else {
      elementToFocus = body;
    }

    this.ngZone.runOutsideAngular(() => {
      Promise.resolve(() => (elementToFocus as HTMLElement).focus());
      this.elementWithFocus = null;
    });
  }

  @HostListener('click', ['$event'])
  public backdropClick(e: MouseEvent): void {
    if (this.backdrop === true && this.elementRef.nativeElement === e.target) {
      this.dismiss();
    }
  }

  public dismiss(result?: any): void {
    this.dismissed.next(result);
    this.dismissed.complete();
  }

  private updateClassList(): void {
    this.classList = buildClassList<ModalHostWindowComponent>(this, 'modal-dialog', {
      size: 'modal-' + this.size,
      centered: 'modal-dialog-centered',
      scrollable: 'modal-dialog-scrollable'
    });
  }

  private updateHostClassList(): void {
    this.hostClassList = buildClassList<ModalHostWindowComponent>(this, 'modal d-block', {
      windowClass: this.windowClass
    });
  }
}

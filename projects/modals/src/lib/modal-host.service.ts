import {DOCUMENT} from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  Injectable,
  Injector,
  OnChanges,
  Renderer2,
  RendererFactory2,
  SimpleChange,
  SimpleChanges,
  TemplateRef,
  Type
} from '@angular/core';
import {Subject} from 'rxjs';
import {filter} from 'rxjs/operators';

import {MODAL_BACKDROP_PROPS, ModalBackdropComponent} from './components/modal-backdrop.component';
import {MODAL_HOST_WINDOW_PROPS, ModalHostWindowComponent} from './components/modal-host-window.component';
import {ContentRef} from './util/content-ref';
import {focusTrap} from './util/focus-trap';
import {MODAL_CONFIG, ModalConfig} from './util/modal-config';
import {ModalContent} from './util/modal-content';
import {MODAL_DATA} from './util/modal-data';
import {ModalRef} from './util/modal-ref';

import {ScrollBarAdjustService} from './scroll-bar-adjust.service';

@Injectable({providedIn: 'root'})
export class ModalHostService {
  private readonly activeWindowCmptHasChanged = new Subject<void>();
  private readonly ariaHiddenValues = new Map<Element, string>();
  private readonly windowCmps: ComponentRef<ModalHostWindowComponent>[] = [];
  private readonly modalRefs: ModalRef[] = [];
  private readonly document: Document;
  public readonly renderer: Renderer2;

  constructor(
    private readonly injector: Injector,
    private readonly scrollBarAdjust: ScrollBarAdjustService,
    private readonly applicationRef: ApplicationRef,
    @Inject(DOCUMENT) document: any,
    @Inject(MODAL_CONFIG) private readonly moduleConfig: ModalConfig,
    rendererFactory: RendererFactory2
  ) {
    // Workaround for https://github.com/angular/angular/issues/20351
    this.document = document;
    this.renderer = rendererFactory.createRenderer(null, null);

    this.activeWindowCmptHasChanged.pipe(filter(() => this.windowCmps.length > 0)).subscribe(() => {
      const activeWindowCmp = this.windowCmps.slice(-1)[0];
      focusTrap(activeWindowCmp.location.nativeElement, this.activeWindowCmptHasChanged);
      this.revertAriaHidden();
      this.setAriaHidden(activeWindowCmp.location.nativeElement);
    });
  }

  public open<T extends ModalContent, R = any>(
    moduleCFR: ComponentFactoryResolver,
    moduleinjector: Injector,
    content: T,
    config?: ModalConfig
  ): ModalRef<T, R> {
    config = Object.assign({}, this.moduleConfig, config);

    const containerEl = this.document.body;
    const revertScrollbarPadding = this.scrollBarAdjust.compensate();
    const modalRef = new ModalRef();
    const contentRef = this.createContentRef(moduleCFR, moduleinjector, content, modalRef, config);

    modalRef.snapshot.componentRef = contentRef.componentRef;

    let backdropCmpRef: ComponentRef<ModalBackdropComponent>;
    if (config.backdrop !== false) {
      backdropCmpRef = this.attachBackdrop(moduleCFR, containerEl);
    }

    const windowCmpRef: ComponentRef<ModalHostWindowComponent> = this.attachModalHostWindow(
      moduleCFR,
      containerEl,
      contentRef,
      modalRef
    );

    this.registerModalRef(modalRef);
    this.registerWindowCmp(windowCmpRef);

    this.applyComponentConfig(windowCmpRef.instance, config, MODAL_HOST_WINDOW_PROPS);

    if (backdropCmpRef && backdropCmpRef.instance) {
      this.applyComponentConfig(backdropCmpRef.instance, config, MODAL_BACKDROP_PROPS);
    }

    // Clean up when modal completes
    modalRef.onComplete.subscribe(() => {
      // Revert scrollbar compensation
      revertScrollbarPadding();

      // remove window
      const windowNativeEl = windowCmpRef.location.nativeElement;
      this.renderer.removeChild(windowNativeEl.parentNode, windowNativeEl);
      windowCmpRef.destroy();

      // remove backdrop id exists
      if (backdropCmpRef) {
        const bdEl = backdropCmpRef.location.nativeElement;
        this.renderer.removeChild(bdEl.parentNode, bdEl);
        backdropCmpRef.destroy();
      }

      // Destroy injected component/template if exists
      if (contentRef.viewRef) {
        contentRef.viewRef.destroy();
      }
    });

    return modalRef;
  }

  public dismissAll(): void {
    this.modalRefs.forEach(ref => ref.dismiss());
  }

  public hasOpenModals(): boolean {
    return this.modalRefs.length > 0;
  }

  private createContentRef<T extends ModalContent>(
    moduleCFR: ComponentFactoryResolver,
    moduleinjector: Injector,
    content: T,
    modalRef: ModalRef,
    config: ModalConfig
  ): ContentRef {
    if (!content) {
      return null;
    } else if (content instanceof TemplateRef) {
      return this.createContentRefFromTemplateRef(content, modalRef, config);
    } else {
      return this.createContentRefFromComponent(moduleCFR, moduleinjector, content as Type<any>, modalRef, config);
    }
  }

  private createContentRefFromTemplateRef(content: TemplateRef<any>, modalRef: ModalRef, config: ModalConfig): ContentRef {
    const context = {
      $implicit: config.data,
      close: (result: any) => modalRef.resolve(result),
      dismiss: () => modalRef.dismiss()
    };

    return new ContentRef(content.createEmbeddedView(context));
  }

  private createContentRefFromComponent(
    moduleCFR: ComponentFactoryResolver,
    moduleinjector: Injector,
    content: Type<any>,
    modalRef: ModalRef<Type<any>>,
    config: ModalConfig
  ): ContentRef {
    const cmpFactory = moduleCFR.resolveComponentFactory(content);
    const contentInjector = Injector.create({
      parent: moduleinjector,
      providers: [
        {provide: ModalRef, useValue: modalRef},
        {provide: MODAL_DATA, useValue: config.data}
      ]
    });

    const cmpRef = cmpFactory.create(contentInjector);
    this.renderer.addClass(cmpRef.location.nativeElement, 'modal-content');

    if (config.scrollable) {
      this.renderer.addClass(cmpRef.location.nativeElement, 'component-host-scrollable');
    }

    return new ContentRef(cmpRef.hostView, cmpRef);
  }

  private setAriaHidden(element: Element): void {
    const parent = element.parentElement;
    if (parent && element !== this.document.body) {
      Array.from(parent.children).forEach(sibling => {
        if (sibling !== element && sibling.nodeName !== 'SCRIPT') {
          this.ariaHiddenValues.set(sibling, sibling.getAttribute('aria-hidden'));
          sibling.setAttribute('aria-hidden', 'true');
        }
      });

      this.setAriaHidden(parent);
    }
  }

  private revertAriaHidden(): void {
    this.ariaHiddenValues.forEach((value, element) => {
      if (value) {
        element.setAttribute('aria-hidden', value);
      } else {
        element.removeAttribute('aria-hidden');
      }
    });

    this.ariaHiddenValues.clear();
  }

  private attachBackdrop(moduleCFR: ComponentFactoryResolver, containerEl: HTMLElement): ComponentRef<ModalBackdropComponent> {
    const backdropCmpRef = moduleCFR.resolveComponentFactory(ModalBackdropComponent).create(this.injector);

    this.applicationRef.attachView(backdropCmpRef.hostView);
    this.renderer.appendChild(containerEl, backdropCmpRef.location.nativeElement);

    return backdropCmpRef;
  }

  private attachModalHostWindow(
    moduleCFR: ComponentFactoryResolver,
    containerEl: HTMLElement,
    contentRef: ContentRef,
    modalRef: ModalRef
  ): ComponentRef<ModalHostWindowComponent> {
    const windowCmpRef = moduleCFR.resolveComponentFactory(ModalHostWindowComponent).create(this.injector);
    windowCmpRef.instance.modalContentOutlet.insert(contentRef.viewRef);

    this.applicationRef.attachView(windowCmpRef.hostView);
    this.renderer.appendChild(containerEl, windowCmpRef.location.nativeElement);

    windowCmpRef.instance.dismissed.subscribe(() => modalRef.dismiss());
    return windowCmpRef;
  }

  private registerModalRef(modalRef: ModalRef): void {
    const unregisterModalRef = () => {
      const index = this.modalRefs.indexOf(modalRef);
      if (index > -1) {
        this.modalRefs.splice(index, 1);
      }
    };

    this.modalRefs.push(modalRef);
    modalRef.onComplete.subscribe(unregisterModalRef);
  }

  private registerWindowCmp(windowCmpRef: ComponentRef<ModalHostWindowComponent>): void {
    const unregisterWindowCmp = () => {
      const index = this.windowCmps.indexOf(windowCmpRef);
      if (index > -1) {
        this.windowCmps.splice(index, 1);
        this.activeWindowCmptHasChanged.next();
      }
    };

    this.windowCmps.push(windowCmpRef);
    this.activeWindowCmptHasChanged.next();

    windowCmpRef.onDestroy(unregisterWindowCmp);
  }

  private applyComponentConfig<T extends OnChanges>(instance: T, config: any, properties: (keyof T)[]): void {
    const changes: SimpleChanges = {};

    // Apply config elements to instance
    properties.forEach(property => {
      const value = config[property];
      if (value != null) {
        changes[property as string] = new SimpleChange(instance[property], value, false);
        instance[property] = value;
      }
    });

    // Apply config elements as simple changes to instance
    instance.ngOnChanges(changes);
  }
}

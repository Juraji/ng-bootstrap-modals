import {ComponentFactoryResolver, Injectable, Injector} from '@angular/core';
import {Observable} from 'rxjs';

import {ConfirmModalData} from './components/confirm/confirm';
import {ConfirmModal} from './components/confirm/confirm.modal';
import {FractionMode, ShadeModalData, ShadeRef} from './components/shade/shade';
import {ShadeModal} from './components/shade/shade.modal';
import {ModalConfig} from './configuration/modal-config';
import {ModalHostService} from './modal-host.service';
import {ModalContent} from './util/modal-content';
import {ModalRef} from './util/modal-ref';

/**
 * The main service for managing modals
 */
@Injectable()
export class Modals {
  public constructor(
    private readonly moduleCFR: ComponentFactoryResolver,
    private readonly moduleInjector: Injector,
    private readonly modalHost: ModalHostService
  ) {
  }

  /**
   * Open an entry component in a modal window host
   *
   * @param content The component to host
   * @param config Modal host configuration and component data.
   *               When the data property is set you can use the injection token "MODAL_DATA" to inject
   *               the value into the constructor of your modal component.
   */
  public open<R = unknown>(content: ModalContent, config?: ModalConfig): ModalRef<R> {
    return this.modalHost.open(this.moduleCFR, this.moduleInjector, content, config);
  }

  /**
   * Confirm a user action
   *
   * @param message (HTML or text) The message to display
   * @param confirm Custom confirm button label, defaults to "Yes"
   * @param cancel Custom cancel button label, defaults to "Cancel"
   * @return The ModalRef to the hosted modal
   */
  public confirm(message: string, confirm?: string, cancel?: string): ModalRef<'OK'> {
    return this.open(ConfirmModal, {
      data: {
        message,
        confirmLabel: confirm,
        cancelLabel: cancel
      } as ConfirmModalData
    });
  }

  /**
   * Create a blocking shade, with a message.
   * Only dismissible via the ShadeRef.
   *
   * @param message (HTML or text) The message to display
   * @param progress Optional observable, emitting task progress from 0 until 100
   *                 When undefined, emitting undefined or emitting a out-of-range number,
   *                 the modal will display an indefinite progressbar
   * @param progressMode When {@param progress} is supplied, this will tell the renderer
   *                     whether to expect PERCENT (0..100) or a FRACTION (0..1). Defaults to PERCENT
   */
  public shade(
    message: string | Observable<string>,
    progress?: Observable<number>,
    progressMode: FractionMode = 'PERCENT'
  ): ShadeRef {
    return this.open<never>(ShadeModal, {
      data: {message, progress, progressMode} as ShadeModalData,
      scrollable: false,
      size: 'sm',
      centered: true,
      keyboard: false,
      backdrop: 'static',
    });
  }

  /**
   * Dismiss all currently hosted modals
   */
  public dismissAll(): void {
    this.modalHost.dismissAll();
  }

  /**
   * True when there are modals currently hosted, False otherwise.
   */
  public hasOpenModals(): boolean {
    return this.modalHost.hasOpenModals();
  }
}

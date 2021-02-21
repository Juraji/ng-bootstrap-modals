import {ComponentFactoryResolver, Injectable, Injector} from '@angular/core';

import {ModalHostService} from './modal-host.service';
import {ModalConfig} from './configuration/modal-config';
import {ModalContent} from './util/modal-content';
import {ModalRef} from './util/modal-ref';
import {ConfirmModalData} from './components/confirm-modal/confirm';
import {ConfirmModalComponent} from './components/confirm-modal/confirm-modal.component';

/**
 * The main service for managing modals
 */
@Injectable()
export class Modals {
  constructor(
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
  public open<T extends ModalContent, R = any>(content: T, config?: ModalConfig): ModalRef<T, R> {
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
  public confirm(
    message: string,
    confirm?: string,
    cancel?: string
  ): ModalRef<never> {
    // @ts-ignore
    return this.open(ConfirmModalComponent, {
      data: {
        message,
        confirmLabel: confirm,
        cancelLabel: cancel
      } as ConfirmModalData
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

import {ComponentFactoryResolver, Injectable, Injector} from '@angular/core';

import {ModalHostService} from './modal-host.service';
import {ModalConfig} from './util/modal-config';
import {ModalContent} from './util/modal-content';
import {ModalRef} from './util/modal-ref';
import {ConfirmModalData} from './util/confirm';

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
   * @param config Modal host configuration and component data (Use injection token MODAL_DATA)
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
   * @return A Record<[option name], boolean>, reflecting the extraOptions parameter and the user's input per option
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

  public dismissAll(): void {
    this.modalHost.dismissAll();
  }

  public hasOpenModals(): boolean {
    return this.modalHost.hasOpenModals();
  }
}

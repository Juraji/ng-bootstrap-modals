import {ComponentFactoryResolver, Injectable, Injector} from '@angular/core';

import {ModalHostService} from './modal-host.service';
import {ModalConfig} from './util/modal-config';
import {ModalContent} from './util/modal-content';
import {ModalRef} from './util/modal-ref';
import {ConfirmModalData, ExtraOptions, ExtraOptionsResult} from './util/confirm';

@Injectable()
export class ModalsService {
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
   * @param extraOptions A Record<[option name], [option label]>
   * @param confirm Custom confirm button label, defaults to "Yes"
   * @param cancel Custom cancel button label, defaults to "Cancel"
   * @return A Record<[option name], boolean>, reflecting the extraOptions parameter and the user's input per option
   */
  public confirm<T extends ExtraOptions = {}>(
    message: string,
    extraOptions: T = {} as T,
    confirm?: string,
    cancel?: string
  ): ModalRef<never, ExtraOptionsResult<T>> {
    // @ts-ignore
    return this.open(ConfirmModalComponent, {
      data: {
        message,
        extraOptions,
        confirmLabel: confirm,
        cancelLabel: cancel
      } as ConfirmModalData<T>
    });
  }

  public dismissAll(): void {
    this.modalHost.dismissAll();
  }

  public hasOpenModals(): boolean {
    return this.modalHost.hasOpenModals();
  }
}

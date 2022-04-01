import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule, ValueProvider} from '@angular/core';

import {AutoFocusDirective} from './components/auto-focus.directive';
import {ConfirmModal} from './components/confirm/confirm.modal';
import {DismissDirective} from './components/dismiss.directive';
import {ModalBackdropComponent} from './components/modal-backdrop/modal-backdrop.component';
import { ModalFormDirective } from './components/modal-form.directive';
import {ModalHostWindowComponent} from './components/modal-host-window/modal-host-window.component';
import {ResolveDirective} from './components/resolve.directive';
import {ShadeModal} from './components/shade/shade.modal';
import {DEFAULT_MODAL_CONFIG, MODAL_CONFIG, RootModalConfig} from './configuration/modal-config';
import {ModalHostService} from './modal-host.service';
import {Modals} from './modals.service';
import {ScrollBarAdjustService} from './scroll-bar-adjust.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    // Modal host
    ModalHostWindowComponent,
    ModalBackdropComponent,

    // Convenience directives
    AutoFocusDirective,
    DismissDirective,
    ResolveDirective,
    ModalFormDirective,

    // Predefined modals
    ConfirmModal,
    ShadeModal
  ],
  exports: [
    AutoFocusDirective,
    DismissDirective,
    ResolveDirective,
    ModalFormDirective
  ],
  providers: [Modals]
})
export class ModalsModule {

  /**
   * Root configuration, to be added to the imports of the root module of your app.
   *
   * @param config Optional global configuration, applied to all modals (except predefined modals).
   */
  public static forRoot(config?: RootModalConfig): ModuleWithProviders<ModalsModule> {
    const rootConfigProvider: ValueProvider = {
      provide: MODAL_CONFIG,
      useValue: Object.assign({}, DEFAULT_MODAL_CONFIG, config)
    };

    return {
      ngModule: ModalsModule,
      providers: [
        ModalHostService,
        ScrollBarAdjustService,
        rootConfigProvider
      ]
    };
  }
}

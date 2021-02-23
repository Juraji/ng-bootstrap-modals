import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule, ValueProvider} from '@angular/core';

import {ConfirmModal} from './components/confirm/confirm.modal';
import {ModalBackdropComponent} from './components/modal-backdrop/modal-backdrop.component';
import {ModalHostWindowComponent} from './components/modal-host-window/modal-host-window.component';
import {Modals} from './modals.service';
import {ModalHostService} from './modal-host.service';
import {ScrollBarAdjustService} from './scroll-bar-adjust.service';
import {DEFAULT_MODAL_CONFIG, MODAL_CONFIG, RootModalConfig} from './configuration/modal-config';
import {AutoFocusDirective} from './components/auto-focus.directive';
import {DismissDirective} from './components/dismiss.directive';
import {ResolveDirective} from './components/resolve.directive';
import {ShadeModal} from './components/shade/shade.modal';

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

    // Predefined modals
    ConfirmModal,
    ShadeModal
  ],
  exports: [
    AutoFocusDirective,
    DismissDirective,
    ResolveDirective
  ],
  providers: [Modals]
})
export class NgbmodModalsModule {

  /**
   * Root configuration, to be added to the imports of the root module of your app.
   *
   * @param config Optional global configuration, applied to all modals (except predefined modals).
   */
  public static forRoot(config?: RootModalConfig): ModuleWithProviders<NgbmodModalsModule> {
    const rootConfigProvider: ValueProvider = {
      provide: MODAL_CONFIG,
      useValue: Object.assign({}, DEFAULT_MODAL_CONFIG, config)
    };

    return {
      ngModule: NgbmodModalsModule,
      providers: [
        ModalHostService,
        ScrollBarAdjustService,
        rootConfigProvider
      ]
    };
  }
}

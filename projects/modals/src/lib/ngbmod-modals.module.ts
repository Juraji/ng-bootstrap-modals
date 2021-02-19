import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {ConfirmModalComponent} from './components/confirm-modal.component';
import {ModalBackdropComponent} from './components/modal-backdrop.component';
import {ModalHostWindowComponent} from './components/modal-host-window.component';
import {Modals} from './modals.service';
import {ModalHostService} from './modal-host.service';
import {ScrollBarAdjustService} from './scroll-bar-adjust.service';
import {DEFAULT_MODAL_CONFIG, MODAL_CONFIG, RootModalConfig} from './util/modal-config';
import {AutoFocusDirective} from './components/auto-focus.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ModalHostWindowComponent, ModalBackdropComponent, ConfirmModalComponent, AutoFocusDirective],
  exports: [AutoFocusDirective],
  providers: [Modals],
  entryComponents: [ModalHostWindowComponent, ModalBackdropComponent, ConfirmModalComponent]
})
export class NgbmodModalsModule {
  public static forRoot(config?: RootModalConfig): ModuleWithProviders<NgbmodModalsModule> {
    return {
      ngModule: NgbmodModalsModule,
      providers: [
        ModalHostService,
        ScrollBarAdjustService,
        {provide: MODAL_CONFIG, useValue: config || DEFAULT_MODAL_CONFIG}
      ]
    };
  }
}

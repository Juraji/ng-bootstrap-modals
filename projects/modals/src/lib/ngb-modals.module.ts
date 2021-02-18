import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {ConfirmModalComponent} from './components/confirm-modal.component';
import {ModalBackdropComponent} from './components/modal-backdrop.component';
import {ModalHostWindowComponent} from './components/modal-host-window.component';
import {NgbModalsService} from './ngb-modals.service';
import {ModalHostService} from './modal-host.service';
import {ScrollBarAdjustService} from './scroll-bar-adjust.service';
import {DEFAULT_MODAL_CONFIG, MODAL_CONFIG} from './util/modal-config';
import {AutoFocusDirective} from './components/auto-focus.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ModalHostWindowComponent, ModalBackdropComponent, ConfirmModalComponent, AutoFocusDirective],
  exports: [AutoFocusDirective],
  providers: [NgbModalsService, {provide: MODAL_CONFIG, useValue: DEFAULT_MODAL_CONFIG}],
  entryComponents: [ModalHostWindowComponent, ModalBackdropComponent, ConfirmModalComponent]
})
export class NgbModalsModule {
  public static forRoot(): ModuleWithProviders<NgbModalsModule> {
    return {
      ngModule: NgbModalsModule,
      providers: [ModalHostService, ScrollBarAdjustService]
    };
  }
}

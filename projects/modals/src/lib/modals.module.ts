import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {ConfirmModalComponent} from './components/confirm-modal.component';
import {ModalBackdropComponent} from './components/modal-backdrop.component';
import {ModalHostWindowComponent} from './components/modal-host-window.component';
import {ModalsService} from './modals.service';
import {ModalHostService} from './modal-host.service';
import {ScrollBarAdjustService} from './scroll-bar-adjust.service';
import {DEFAULT_MODAL_CONFIG, MODAL_CONFIG} from './util/modal-config';
import {AutoFocusDirective} from './components/auto-focus.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ModalHostWindowComponent, ModalBackdropComponent, ConfirmModalComponent, AutoFocusDirective],
  exports: [AutoFocusDirective],
  providers: [ModalsService, {provide: MODAL_CONFIG, useValue: DEFAULT_MODAL_CONFIG}],
  entryComponents: [ModalHostWindowComponent, ModalBackdropComponent, ConfirmModalComponent]
})
export class ModalsModule {
  public static forRoot(): ModuleWithProviders<ModalsModule> {
    return {
      ngModule: ModalsModule,
      providers: [ModalHostService, ScrollBarAdjustService]
    };
  }
}

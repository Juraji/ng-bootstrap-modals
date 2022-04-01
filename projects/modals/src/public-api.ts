/*
 * Public API Surface of modals
 */

export {AutoFocusDirective} from './lib/components/auto-focus.directive';
export {DismissDirective} from './lib/components/dismiss.directive';
export {ModalFormDirective} from './lib/components/modal-form.directive';
export {ResolveDirective} from './lib/components/resolve.directive';
export {
  ModalAriaLabelledBy,
  ModalBackdropClass,
  ModalBackdropDisabled,
  ModalBackdropEnabled,
  ModalBackdropStatic,
  ModalCenteredDisabled,
  ModalCenteredEnabled,
  ModalFullScreen,
  ModalFullScreenLgDown,
  ModalFullScreenMdDown,
  ModalFullScreenSmDown,
  ModalFullScreenXlDown,
  ModalFullScreenXxlDown,
  ModalKeyboardDisabled,
  ModalKeyboardEnabled,
  ModalScrollableDisabled,
  ModalScrollableEnabled,
  ModalSizeLg,
  ModalSizeMd,
  ModalSizeSm,
  ModalWindowClass,
  ModalZIndex,
} from './lib/configuration/configuration-decorators';
export {DEFAULT_MODAL_CONFIG, MODAL_CONFIG, ModalConfig, ModalSize} from './lib/configuration/modal-config';
export {ModalsModule} from './lib/modals.module';
export {Modals} from './lib/modals.service';
export {MODAL_DATA} from './lib/util/modal-data';
export {ModalRef} from './lib/util/modal-ref';

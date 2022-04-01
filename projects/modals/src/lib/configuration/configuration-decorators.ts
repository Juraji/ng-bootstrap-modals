import {ModalSizeFullScreenOpt, RootModalConfig} from './modal-config';

const DECORATOR_CONFIG_SYMBOL = Symbol('__modalDecoratorConfig');

const setDecoratorProperty = (target, change: RootModalConfig) => {
  if (!!target[DECORATOR_CONFIG_SYMBOL]) {
    Object.assign(target[DECORATOR_CONFIG_SYMBOL], change);
  } else {
    Object.defineProperty(target, DECORATOR_CONFIG_SYMBOL, {value: change});
  }
};

export const getDecoratorConfig = (target: unknown): RootModalConfig | undefined => target[DECORATOR_CONFIG_SYMBOL];

export const ModalScrollableEnabled = (): ClassDecorator =>
  target => setDecoratorProperty(target, {scrollable: true});
export const ModalScrollableDisabled = (): ClassDecorator =>
  target => setDecoratorProperty(target, {scrollable: false});

export const ModalCenteredEnabled = (): ClassDecorator =>
  target => setDecoratorProperty(target, {centered: true});
export const ModalCenteredDisabled = (): ClassDecorator =>
  target => setDecoratorProperty(target, {centered: false});

export const ModalKeyboardEnabled = (): ClassDecorator =>
  target => setDecoratorProperty(target, {keyboard: true});
export const ModalKeyboardDisabled = (): ClassDecorator =>
  target => setDecoratorProperty(target, {keyboard: false});

export const ModalBackdropStatic = (): ClassDecorator =>
  target => setDecoratorProperty(target, {backdrop: 'static'});
export const ModalBackdropEnabled = (): ClassDecorator =>
  target => setDecoratorProperty(target, {backdrop: true});
export const ModalBackdropDisabled = (): ClassDecorator =>
  target => setDecoratorProperty(target, {backdrop: false});

export const ModalAriaLabelledBy = (ariaLabelledBy: string): ClassDecorator =>
  target => setDecoratorProperty(target, {ariaLabelledBy});
export const ModalWindowClass = (windowClass: string): ClassDecorator =>
  target => setDecoratorProperty(target, {windowClass});
export const ModalZIndex = (zIndex = 1050): ClassDecorator =>
  target => setDecoratorProperty(target, {zIndex});
export const ModalBackdropClass = (backdropClass: string): ClassDecorator =>
  target => setDecoratorProperty(target, {backdropClass});

export const ModalSizeSm = (): ClassDecorator =>
  target => setDecoratorProperty(target, {size: 'sm'});
export const ModalSizeMd = (): ClassDecorator =>
  target => setDecoratorProperty(target, {size: 'md'});
export const ModalSizeLg = (): ClassDecorator =>
  target => setDecoratorProperty(target, {size: 'lg'});
export const ModalFullScreen = (type?: ModalSizeFullScreenOpt): ClassDecorator =>
  target => setDecoratorProperty(target, {size: type || 'fullscreen'});
export const ModalFullScreenSmDown = (): ClassDecorator =>
  target => setDecoratorProperty(target, {size: 'fullscreen-sm-down'});
export const ModalFullScreenMdDown = (): ClassDecorator =>
  target => setDecoratorProperty(target, {size: 'fullscreen-md-down'});
export const ModalFullScreenLgDown = (): ClassDecorator =>
  target => setDecoratorProperty(target, {size: 'fullscreen-lg-down'});
export const ModalFullScreenXlDown = (): ClassDecorator =>
  target => setDecoratorProperty(target, {size: 'fullscreen-xl-down'});
export const ModalFullScreenXxlDown = (): ClassDecorator =>
  target => setDecoratorProperty(target, {size: 'fullscreen-xxl-down'});

import {InjectionToken} from '@angular/core';

/**
 * Used internally to provide config in DI injector.
 * Could be injected into your modal component's constructor, if you'd need it.
 */
export const MODAL_CONFIG = new InjectionToken<ModalConfig>('modal-modal-config');

/**
 * Default config, used by {@link ModalsModule#forRoot()} as default config.
 */
export const DEFAULT_MODAL_CONFIG: RootModalConfig = {
  scrollable: true,
  centered: true,
  keyboard: true,
  backdrop: true,
  zIndex: 1050
};

export type ModalSizeStandardOpt =
  | 'sm'
  | 'md'
  | 'lg';

export type ModalSizeFullScreenOpt =
  | 'fullscreen'
  | 'fullscreen-sm-down'
  | 'fullscreen-md-down'
  | 'fullscreen-lg-down'
  | 'fullscreen-xl-down'
  | 'fullscreen-xxl-down';

export type ModalSize = ModalSizeStandardOpt | ModalSizeFullScreenOpt;

/**
 * Global modal configuration interface
 */
export interface RootModalConfig {
  // Modal host window config
  scrollable?: boolean;
  size?: ModalSize;
  ariaLabelledBy?: string;
  centered?: boolean;
  keyboard?: boolean;
  windowClass?: string;

  // Modal backdrop config
  backdrop?: boolean | 'static';
  zIndex?: number;
  backdropClass?: string;
}

/**
 * Individual modal configuration
 */
export interface ModalConfig<T = unknown> extends RootModalConfig {
  // Modal data
  data?: T;
}

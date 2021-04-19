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

/**
 * Global modal configuration interface
 */
export interface RootModalConfig {
  // Modal host window config
  scrollable?: boolean;
  size?: 'sm' | 'md' | 'lg';
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
export interface ModalConfig extends RootModalConfig {
  // Modal data
  data?: any;
}

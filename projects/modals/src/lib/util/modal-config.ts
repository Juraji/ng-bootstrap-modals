import {InjectionToken} from '@angular/core';

export const MODAL_CONFIG = new InjectionToken<ModalConfig>('im-modal-config');

export const DEFAULT_MODAL_CONFIG: RootModalConfig = {
  scrollable: true,
  centered: true,
  keyboard: true,
  backdrop: true,
  zIndex: 1050
};

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

export interface ModalConfig extends RootModalConfig {
  // Modal data
  data?: any;
}

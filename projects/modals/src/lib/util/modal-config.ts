import {InjectionToken} from '@angular/core';

export const MODAL_CONFIG = new InjectionToken<ModalConfig>('im-modal-config');

export const DEFAULT_MODAL_CONFIG: ModalConfig = {
  scrollable: true,
  centered: true,
  keyboard: true,
  backdrop: true,
  zIndex: 1050
};

export interface ModalConfig {
  // Modal data
  data?: any;

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

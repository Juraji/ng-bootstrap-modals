import {Observable} from 'rxjs';

export interface ShadeModalData {
  message: string;
  progress?: Observable<number>;
}

/**
 * A facade for the ModalRef referencing ShadeModal
 */
export interface ShadeRef {
  /**
   * Emits and completes when {@link dismiss} was called
   */
  readonly onComplete: Observable<void>;

  /**
   * Dismiss this busy modal
   */
  dismiss(): void;
}

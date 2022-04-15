import {Observable} from 'rxjs';

export interface ShadeModalData {
  message: string | Observable<string>;
  progress?: Observable<number>;
  progressMode: FractionMode;
}

export type FractionMode =
  'PERCENT' | // 0..50..100
  'FRACTION'; // 0.0..0.5..1.0

/**
 * A facade for the ModalRef referencing ShadeModal
 */
export interface ShadeRef {
  /**
   * Emits and completes when {@link dismiss} was called
   */
  readonly onComplete: Observable<void>;

  /**
   * Dismiss this shade modal
   */
  dismiss(): void;
}

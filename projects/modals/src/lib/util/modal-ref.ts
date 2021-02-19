import {Observable, Subject} from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {ModalContent} from './modal-content';

interface ModalState<T> {
  state: 'resolved' | 'dismissed' | 'completed';
  result?: T;
}

/**
 * The reference to a hosted modal.
 */
export class ModalRef<T extends ModalContent = any, R = any> {
  private readonly states = new Subject<ModalState<R>>();

  /**
   * Emits either the value or null when the modal is resolved.
   */
  public readonly onResolved: Observable<R>;

  /**
   * Emits when the modal is dismissed.
   */
  public readonly onDismissed: Observable<void>;

  /**
   * Emits when the modal completes, by either being resolved or dismissed.
   */
  public readonly onComplete: Observable<void>;

  constructor() {
    this.onResolved = this.states.pipe(
      filter(s => s.state === 'resolved'),
      map(s => s.result)
    );
    this.onDismissed = this.states.pipe(
      filter(s => s.state === 'dismissed'),
      map(() => undefined)
    );
    this.onComplete = this.states.pipe(
      filter(s => s.state === 'completed'),
      map(() => undefined)
    );
  }

  /**
   * Resolve this modal. Optionally with a value.
   */
  public resolve(result?: R): void {
    this.states.next({state: 'resolved', result});
    this.complete();
  }

  /**
   * Dismisses this modal
   */
  public dismiss(): void {
    this.states.next({state: 'dismissed'});
    this.complete();
  }

  private complete(): void {
    this.states.next({state: 'completed'});
    this.states.complete();
  }
}

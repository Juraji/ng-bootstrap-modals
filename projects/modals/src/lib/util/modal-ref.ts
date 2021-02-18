import {ComponentRef} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {ModalContent} from './modal-content';

type ModalState = 'resolved' | 'dismissed' | 'completed';

interface ModalRefSnapShot<T, R> {
  componentRef: ComponentRef<T>;
  result: R;
}

export class ModalRef<T extends ModalContent = any, R = any> {
  private readonly states = new Subject<ModalState>();
  public readonly onResolved: Observable<R>;
  public readonly onDismissed: Observable<void>;
  public readonly onComplete: Observable<void>;

  // Snapshot properties
  public readonly snapshot: ModalRefSnapShot<T, R> = {
    componentRef: undefined,
    result: undefined
  };

  constructor() {
    this.onResolved = this.states.pipe(
      filter(s => s === 'resolved'),
      map(() => this.snapshot.result)
    );
    this.onDismissed = this.states.pipe(
      filter(s => s === 'dismissed'),
      map(() => undefined)
    );
    this.onComplete = this.states.pipe(
      filter(s => s === 'completed'),
      map(() => undefined)
    );
  }

  public resolve(result: R): void {
    this.snapshot.result = result;
    this.states.next('resolved');
    this.complete();
  }

  public dismiss(): void {
    this.states.next('dismissed');
    this.complete();
  }

  private complete(): void {
    this.states.next('completed');
    this.states.complete();
  }
}

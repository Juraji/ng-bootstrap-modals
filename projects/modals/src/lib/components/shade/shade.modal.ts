import {Component, Inject} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {MODAL_DATA} from '../../util/modal-data';
import {ShadeModalData} from './shade';

interface ProgressBarUpdate {
  state: 'indefinite' | 'running';
  width: string;
  value: number
}

@Component({
  templateUrl: './shade.modal.html',
})
export class ShadeModal {
  public readonly message: Observable<string>;
  public readonly progress?: Observable<ProgressBarUpdate>;

  public constructor(
    @Inject(MODAL_DATA) shadeData: ShadeModalData
  ) {
    this.message = typeof shadeData.message === 'string'
      ? of(shadeData.message)
      : shadeData.message;
    this.progress = shadeData.progress?.pipe(
      startWith(-1),
      map(ShadeModal.mapToPbUpdate)
    );
  }

  private static mapToPbUpdate(n: number): ProgressBarUpdate {
    if (isNaN(n) || n < 0 || n > 100) {
      return {state: 'indefinite', width: '0%', value: 0};
    } else {
      return {state: 'running', width: `${n}%`, value: n};
    }
  }
}

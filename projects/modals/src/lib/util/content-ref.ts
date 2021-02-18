import {ComponentRef, ViewRef} from '@angular/core';

export class ContentRef {
  constructor(public readonly viewRef: ViewRef, public readonly componentRef?: ComponentRef<any>) {
  }
}

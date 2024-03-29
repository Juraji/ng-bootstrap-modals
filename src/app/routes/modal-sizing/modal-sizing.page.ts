/* eslint-disable @typescript-eslint/no-var-requires */
import {Component, OnInit} from '@angular/core';
import {Modals, ModalSize} from '@juraji/ng-bootstrap-modals';

import {ExampleModal} from './example/example.modal';

@Component({
  templateUrl: './modal-sizing.page.html',
})
export class ModalSizingPage implements OnInit {

  public readonly examples: ExampleCodeMap[] = [
    {file: 'example.component.ts', contents: require(`!raw-loader!src/app/code/modal-sizing/example.component.ts.txt`).default},
    {file: 'app.module.ts', contents: require(`!raw-loader!src/app/code/app.module.ts.txt`).default},
  ];

  public constructor(
    private readonly modals: Modals,
  ) {
  }

  public ngOnInit(): void {
  }

  public onSizedModal(size: ModalSize) {
    this.modals.open(ExampleModal, {size});
  }

}

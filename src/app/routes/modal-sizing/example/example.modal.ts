import {Component, Inject, OnInit} from '@angular/core';
import {MODAL_CONFIG, ModalConfig} from '@juraji/ng-bootstrap-modals';

@Component({
  templateUrl: './example.modal.html',
})
export class ExampleModal implements OnInit {

  constructor(
    @Inject(MODAL_CONFIG) public readonly config: ModalConfig,
  ) {
  }

  ngOnInit(): void {
  }

}

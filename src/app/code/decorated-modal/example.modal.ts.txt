import {Component, OnInit} from '@angular/core';
import {ModalFullScreen, ModalKeyboardDisabled} from '@juraji/ng-bootstrap-modals';

@ModalFullScreen()
@ModalKeyboardDisabled()
@Component({
  templateUrl: './example.modal.html'
})
export class ExampleModal implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
